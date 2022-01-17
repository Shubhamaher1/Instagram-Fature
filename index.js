function allowDrop(ev) {

    ev.preventDefault();

}

function drag(ev) {

    ev.dataTransfer.setData("dragid", ev.target.id);

    ev.dataTransfer.setData("parid", ev.target.parentElement.id);

}

function drop(ev) {

    ev.preventDefault();

    var dragid = ev.dataTransfer.getData("dragid");

    var parid = ev.dataTransfer.getData("parid");

    if (ev.target.draggable) {

        ev.target.parentElement.appendChild(document.getElementById(dragid));

        document.getElementById(parid).appendChild(ev.target);

    }

}
