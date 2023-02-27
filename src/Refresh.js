import React from "react";

function Refresh() {
    function reloadPage() {
        window.location.reload();
    }
    return <button onClick={reloadPage()} className="btn"> Recargar formulario</button>
      
}

export default Refresh;