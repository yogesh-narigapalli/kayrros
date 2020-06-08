var assetNames=[];
var assetCategories=[];
var totalIncome =0;
var totalArea=0;
document.getElementById('button').onclick = function(){
    var nameValue = document.getElementById("aname").value;
    var categoryValue = document.getElementById("acategory").value;
    var incomeValue = document.getElementById("aincome").value;
    var areaValue = document.getElementById("aarea").value;
    var labelValue = document.getElementById("alabel").value;

    var assets = document.getElementById('assets');
    
    
    var row = document.createElement('tr');
    
    assets.appendChild(row);
    
    var def= document.createElement('td');
    var nameDef = document.createTextNode(nameValue);
    def.appendChild(nameDef);
    row.appendChild(def);
    
    var adef= document.createElement('td');
    var categoryDef = document.createTextNode(categoryValue);
    adef.appendChild(categoryDef);
    row.appendChild(adef);

    var bdef= document.createElement('td');
    var incomeDef = document.createTextNode(incomeValue);
    bdef.appendChild(incomeDef);
    row.appendChild(bdef);

    var cdef= document.createElement('td');
    var areaDef = document.createTextNode(areaValue);
    cdef.appendChild(areaDef);
    row.appendChild(cdef);

    var ddef= document.createElement('td');
    var labelDef = document.createTextNode(labelValue);
    ddef.appendChild(labelDef);
    row.appendChild(ddef);

    totalArea+=parseInt(areaValue);
    totalIncome+=parseInt(incomeValue);
    assetCategories.push(categoryValue);
    assetNames.push(nameValue);
    document.getElementById("totalIncome").innerHTML="Total Income : " +totalIncome;
    document.getElementById("totalArea").innerHTML="Total Area : "+totalArea;

    event.preventDefault();
}