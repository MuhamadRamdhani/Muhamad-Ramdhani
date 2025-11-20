*/
SELECT 
  v.GroupID,
  v.CompanyName, 
  COUNT(m.GroupID) AS Count
FROM 
  maintable_TVZGW m
INNER JOIN 
  cb_vendorinformation v ON m.GroupID = v.GroupID
GROUP BY 
  v.GroupID, v.CompanyName
ORDER BY 
  Count ASC, v.GroupID DESC;
