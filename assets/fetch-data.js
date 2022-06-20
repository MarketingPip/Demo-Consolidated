$("#quicksearch").keyup(function () {
    var value = this.value.toLowerCase().trim();

    $("table tr").each(function (index) {
        if (!index) return;
        $(this).find("td:nth-child(2), td:first").each(function () {
            var id = $(this).text().toLowerCase().trim();
            var not_found = (id.indexOf(value) == -1);
            $(this).closest('tr').toggle(!not_found);
            return not_found; 
        });
    });
});





// Fetching Spreadsheet JSON Data	
fetch(
    `https://opensheet.elk.sh/1uUoWjiivZAii3ynIAfkx6MweyAEEl3vscq5p7WH1Wp8/Sheet1`
)
    .then((res) => res.json())
    .then((data) => {

        
	
	/// Adding all entries to all entry section
	
        data.forEach((row) => {
		
					console.log(data)
				
					if (row.Type =="Haz"){
						var WasteClass = "notaccepted"
					}
					
						if (row.Type =="Questionable"){
						var WasteClass = "condaccepted"
					}
					
						if (row.Type =="Non-Haz"){
						var WasteClass = "accepted"
					}
					
		document.getElementById("test").innerHTML += `
		
		<tr class="${WasteClass}"><td>${row.Name}</td>
	<td><ul>
  ${row.Items}
</ul></td>
	<td>${row.Info}</td><td>${row.Cost_Of_Disposal}</td></tr>
		
		
		`
          
        });
    });

	


