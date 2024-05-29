const table=document.getElementById("insert")

window.addEventListener("keydown",(event)=>{
  table.innerHTML = `
  <div class="color">
    <table>
    <tr>
      <th>Key</th>
      <th>Key Code</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${event.key}</td>  
      <td>${event.keyCode}</td>  
      <td>${event.code}</td>  
    </tr>  
    </table>
  </div>`; 
})
