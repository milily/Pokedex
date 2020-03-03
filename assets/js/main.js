$(document).ready(function(){
   
   $('#loader1').hide();
   $('#loader2').hide();
   
    var imagenes_disponibles = ['015','024','059','063','065','142','144',
                                '153','168','181','182','184','190','267','298',
                                '304','306','334','339','343','347','348','354',
                                '371','374','411','424','482','493','531','550','566',
                                '567','591','594','606','610','614','617','681','683',
                                '689','698','713','752']
    
    function buscar_todo(imagenes_disponibles){
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokedex/1/',
            type: 'GET',
            dataType: 'JSON',
            data: { 'limit':'811'},
            beforeSend: function(){
                $("#loader1").show();
            }
        })
        .done( function(lista_con_todos_los_pokemones){
            var lista = lista_con_todos_los_pokemones.pokemon_entries;
            for(var i = 0 ; i < lista.length ; i++){
                for(var j = 0 ; j <= imagenes_disponibles.length ; j++){
                    var entry_number = lista[i].entry_number; //verificamos si el entry_number del pokemon, osea su posición

                    if(entry_number < 100){ //Hay imágenes con un 0 antes del número, de darse el caso lo agregamos.
                        entry_number = "0"+entry_number;
                    }    
                    if(imagenes_disponibles[j] == entry_number){
                        console.log(entry_number)
                        $('#lista-pokemones').append(`
                                <div id=`+entry_number+` class="pokemon">
                                        <div class="imagen-pokemon">
                                            <img src="assets/img/`+ entry_number +`.png" alt="" height="100px" width="100px">
                                        </div>
                                        <div class="sub-elementos">
                                            <img src="assets/icon/pokeball_gray.png" class="icons" width="25px">
                                            <img src="assets/icon/valentines-heart.png" class="icons" width="25px">
                                            <img src="assets/icon/data.png" class="icons" width="25px">
                                        </div>
                                </div>`);
                    }
                }
            }
            
        })
        .fail( function(){
            alert("Falló, pero esto no te detendrá hasta lograr lo que buscas, eres seca :)");
        })
        .always( function(){
            $(".loader1").hide();
        })
    }
     buscar_todo(imagenes_disponibles);
});

