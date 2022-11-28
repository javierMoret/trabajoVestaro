function edit_row(no) {
    var nombre = document.getElementById("nombre_row" + no);
    var precio = document.getElementById("precio_row" + no);
    var cantidad = document.getElementById("cantidad_row" + no);
    var fecha = document.getElementById("fecha_row" + no)
    var nombre_data = nombre.innerHTML;
    var precio_data = precio.innerHTML;
    var cantidad_data = cantidad.innerHTML;
    var fecha_data = cantidad.innerHTML;
    nombre.innerHTML = "<input type='text' id='name_text" + no + "' value='" + nombre_data + "'>";
    precio.innerHTML = "<input type='text' id='precio_text" + no + "' value='" + precio_data + "'>";
    cantidad.innerHTML = "<input type='text' id='cantidad_text" + no + "' value='" + cantidad_data + "'>";
    fecha.innerHTML = "<input type='date' id='fecha_text" + no + "' value='" + fecha_data + "'>";
}

function save_row(no) {
    var nombre_val = document.getElementById("name_text" + no).value;
    var precio_val = document.getElementById("precio_text" + no).value;
    var cantidad_val = document.getElementById("cantidad_text" + no).value;
    var fecha_val = document.getElementById("fecha_text" + no).value;
    document.getElementById("nombre_row" + no).innerHTML = nombre_val;
    document.getElementById("precio_row" + no).innerHTML = precio_val;
    document.getElementById("cantidad_row" + no).innerHTML = cantidad_val;
    document.getElementById("fecha_row" + no).innerHTML = fecha_val;
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var nuevo_nombre = document.getElementById("nuevo_nombre").value;
    var nuevo_precio = document.getElementById("nuevo_precio").value;
    var nueva_cantidad = document.getElementById("nueva_cantidad").value;
    var nueva_fecha = document.getElementById("nueva_fecha").value;
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='nombre_row" + table_len + "'>" +
        nuevo_nombre + "</td><td id='precio_row" + table_len + "'>" + nuevo_precio + "</td><td id='cantidad_row" + table_len + "'>" +
        nueva_cantidad + "</td><td id='fecha_row" + table_len + "'>" + nueva_fecha +
        "</td><td class='acciones'><button class='edit' onclick='edit_row(" + table_len + ");' id='edit_button" + table_len + "'><i class='fa-solid fa-pen-to-square'></i></button> <button class='save' onclick='save_row(" + table_len + ");' id='save_button" + table_len + "'><i class='fa-solid fa-floppy-disk'></i></button> <button class='delete' onclick='delete_row(" + table_len + ");'><i class='fa-solid fa-trash'></i></button></td></tr>";
    document.getElementById("nuevo_nombre").value = "";
    document.getElementById("nuevo_precio").value = "";
    document.getElementById("nueva_cantidad").value = "";
    document.getElementById("nueva_fecha").value = "";
}