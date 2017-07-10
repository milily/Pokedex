$(document).ready(function() {

    $(".loader").hide(); //Ocultamos el loader por defecto
    $(".loader2").hide(); //Ocultamos el loader por defecto

    var imagenes_disponibles = ['015','024','059','063','065','142','144',
                                '153','168','181','182','184','190','267','298',
                                '304','306','334','339','343','347','348','354',
                                '371','374','411','424','482','493','531','550','566',
                                '567','591','594','606','610','614','617','681','683',
                                '689','698','713','752']

    listarTodo(imagenes_disponibles)

    $("body").on('click','.pokemon', function(){
        var pokemon_id = $(this).attr("id")

        buscarPokemon(pokemon_id)
    });
    
});