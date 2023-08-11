
class Persona{
    constructor(nombre, apellido, id, sexo){
        this.nombre = nombre
        this.apellido = apellido
        this.id = id
        this.sexo = sexo
    }
}

function mostrar(){
    var llave = document.getElementById('division').style.display

    if (llave == 'none') {
        document.getElementById('division').style.display = 'block'
        document.getElementById('boton-1').value = 'ocultar'
    } else {
        document.getElementById('division').style.display = 'none'
        document.getElementById('boton-1').value = 'añadir persona'
    }

    


}
let personas = []
function generacion(){


    var name = document.getElementById("nombre-p").value
    var sname = document.getElementById("apellido-p").value
    var dni = document.getElementById("id-p").value
    var gen = document.getElementById("sexo-p").value


    const Persona1 = new Persona(name, sname, dni, gen);
    console.log(Persona1)
    personas.push(Persona1)

    document.getElementById("nombre-p").value = ''
    document.getElementById("apellido-p").value = ''
    document.getElementById("id-p").value = ''
    document.getElementById("sexo-p").value = ''

}

function buscar(){
    var campoR = document.getElementById('Respuestas')
    
    if(campoR.childElementCount > 0){
        var eliminate = document.getElementById('tabla-1')  
        var basura = campoR.removeChild(eliminate)
        }
    
    var table = document.createElement('table')
    table.setAttribute("id", "tabla-1")
    var row = document.createElement('tr')
    var column1 = document.createElement('td')
    var column2 = document.createElement('td')
    var column3 = document.createElement('td')
    var column4 = document.createElement('td')

    const busqueda = document.getElementById('busqueda').value
    const Resultado = personas.find(persona => persona.id === busqueda);

    if (Resultado){
        
        console.log(Resultado)
        var text1 = document.createTextNode(Resultado.nombre)
        var text2 = document.createTextNode(Resultado.apellido)
        var text3 = document.createTextNode(Resultado.id)
        var text4 = document.createTextNode(Resultado.sexo)

        campoR.appendChild(table)
        table.appendChild(row)
        row.appendChild(column1)
        column1.appendChild(text1)
        row.appendChild(column2)
        column2.appendChild(text2)
        row.appendChild(column3)
        column3.appendChild(text3)
        row.appendChild(column4)
        column4.appendChild(text4)
    }
    
    else{
        console.log("no se ha encontrado el ususario")
    }
}

function todos(){
    var campoR = document.getElementById('Respuestas')
    
    if(campoR.childElementCount > 0){
        var eliminate = document.getElementById('tabla-1')  
        var basura = campoR.removeChild(eliminate)
        }

        var table = document.createElement('table')
        table.setAttribute("id", "tabla-1")

        for (let i = 0; i < personas.length; i++) {
        var row = document.createElement('tr')
        row.setAttribute("class", "row")

        var column1 = document.createElement('td')
        var column2 = document.createElement('td')
        var column3 = document.createElement('td')
        var column4 = document.createElement('td')

        var text1 = document.createTextNode(personas[i].nombre)
        var text2 = document.createTextNode(personas[i].apellido)
        var text3 = document.createTextNode(personas[i].id)
        var text4 = document.createTextNode(personas[i].sexo)

        table.appendChild(row)
        row.appendChild(column1)
        column1.appendChild(text1)
        row.appendChild(column2)
        column2.appendChild(text2)
        row.appendChild(column3)
        column3.appendChild(text3)
        row.appendChild(column4)
        column4.appendChild(text4)
            
        }
        
        campoR.appendChild(table)

}