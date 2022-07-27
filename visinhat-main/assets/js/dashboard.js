const getData = JSON.parse(localStorage.getItem('guest'));
              console.log(getData);
            function builtTable(){
                var table = document.getElementById('myTable');
                for(var i=0;i<=Object.keys(getData).length; i++){
                    var row=`<tr>
                        <td>${getData[i].name} </td>
                        <td>${getData[i].phone} </td>
                        <td>${getData[i].email} </td>
                        <td>${getData[i].comments} </td>
                        </tr>`
                    table.innerHTML+=row;
                }
            } builtTable(getData);