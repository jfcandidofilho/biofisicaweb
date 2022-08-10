// Toggles which ion is at user disposal in the 'panel'
function toggle( 
    on = 'K', off1 = 'Na', off2 = 'Cl', pre = 'box_', pos ='' 
    ){

    document.getElementById(pre + on + pos).style.display = 'grid';
    document.getElementById(pre + off1 + pos).style.display = 'none';
    document.getElementById(pre + off2 + pos).style.display = 'none';

    _ION = on;

    refresh_graph();

}