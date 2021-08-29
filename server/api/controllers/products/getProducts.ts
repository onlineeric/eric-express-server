import { Request, Response } from 'express';
import { Connection, Request as SqlReq } from 'tedious';

export default function getProducts(connection: Connection, _: Request, res: Response) {
    const query = `SELECT TOP 1000 p.*, 
              img.ProductPhotoID, 
              img.ThumbNailPhoto, 
              img.ThumbnailPhotoFileName, 
              img.LargePhoto, 
              img.LargePhotoFileName
      FROM Production.Product AS p
      INNER JOIN Production.ProductProductPhoto AS ppp ON p.ProductID = ppp.ProductID
      INNER JOIN Production.ProductPhoto AS img ON ppp.ProductPhotoID = img.ProductPhotoID 
      FOR JSON PATH;
      `;
    let resultJson = '';

    const sqlReq = new SqlReq(query, (err, _) => {
      if (err) {
        throw err;
      }

      // when request finished
      connection.close();
      console.log('Execute statement DONE!');
      res.json(JSON.parse(resultJson));
    });

    // Emits a 'DoneInProc' event when completed.
    sqlReq.on('row', (columns) => {
      columns.forEach((column) => {
        if (column.value !== null) {
          resultJson += column.value;
        }
      });
    });

    sqlReq.on('doneInProc', (rowCount, _) => {
      console.log(`doneInProc: ${rowCount} rows returned`);
    });

    connection.execSql(sqlReq);
  }
