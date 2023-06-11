/* SegundaPreEntrega

    El programa consiste en venta de prodcutos

    Al inicio del programa podes elegir si ingresar los productos manualmente o usar los predeterminados ( se encuentran en la linea 68 al 62 )
    
    Nota: Al inicio del programa todos los productos tienen stock, despues de realizar una compra el producto no se puede volver a comprar ya que no hay stock

    A continuacion podes elegir en comprar productos, reponer stock o terminar el programa.

*/

const array = [];

class Articulos{

    constructor( nombre , valor , codigo ){

        this.nombre = nombre;
        this.valor = valor;
        this.codigo = codigo;
        this.vendido = false;
    }

    venta(){
        this.vendido = true;
    }

    texto(){
        let texto = "Codigo: " + this.codigo + "\nNombre: " + this.nombre + "\nValor: " + this.valor + "\n\n";
        return texto;
    }

}

inicioPrograma(); //Linea 40 al 86

programa(); //Linea 88 al 129

function inicioPrograma(){

    let entrada = 0;

    while( entrada == 0 ){

        let inicio = prompt( "Ingrese numero para iniciar\n1- Si desea ingresar los datos manualmente\n2- Si desea usar los datos predeterminados" );

        switch( inicio ){

            case "1":

                for( let i = 0 ; i < 5 ; i++ ){

                    array.push( new Articulos( 

                        prompt( "Ingrese nombre del articulo" ),
                        prompt( "Ingrese valor del producto" ),
                        prompt( "Ingrese codigo del producto" )
                    ) );
                }

                entrada = 1;

                break;

            case "2":

                array.push( new Articulos( "CELULAR SAMSUNG" , "150000" , "1") );
                array.push( new Articulos( "PARLANTES SONY" , "100000" , "2") );
                array.push( new Articulos( "MONITOR LG" , "60000" , "3") );
                array.push( new Articulos( "AURICULARES LOGITECH" , "90000" , "4") );
                array.push( new Articulos( "TELEVISOR PHILIPS" , "200000" , "5") );

                entrada = 1;

                break;

            default:

                alert( "Numero no valido ingrese nuevamente" );
                entrada = prompt( "Ingrese numero para iniciar" );
                break;
        }

    }
}

function programa(){

    let entrada = 0;

    while( entrada == 0 ){

        let inicio = prompt( "Que desea hacer\n1-Comprar producto\n2-Reponer Stock\n3-Salir" );

        switch( inicio ){

            case "1":

                comprarPoducto(); //Linea 131 al 193

                break;

            case "2":

                validarStock(); //Linea 195 al 241

                break;

            case "3":

                alert( "Fin del programa" );

                entrada = 1;

                break;

            default:

                alert( "Valor invalido ingrese nuevamente" );

                entrada = prompt( "Que desea hacer\n1-Comprar producto\n2-Verificar stock\n3-Salir" );

                break;
        }

    }

}

function comprarPoducto(){
    
    let texto = "";

    for( let i = 0 ; i < array.length ; i++ ){
        texto += array[i].texto();
    }

    let bandera = 0;

    while( bandera == 0 ){

        let entrada = prompt( "Que producto desea comprar\n\n" + texto + "ingrese Codigo o Nombre del producto").toLocaleUpperCase();

        const busqueda = array.find( objeto => (objeto.nombre == entrada) || (objeto.codigo == entrada ) );

        if( busqueda != undefined ){

            let entrada1 = prompt( "Producto encontrado, Que desea hacer\n1-Comprar\n2-Salir\n\n" + busqueda.texto() );

            switch( entrada1 ){
                
                case "1":
                
                    for( let i = 0 ; i < array.length ; i++ ){

                        if( ( array[i].nombre == entrada ) || ( array[i].codigo == entrada ) ){

                            if( array[i].vendido == false ){

                                array[i].venta();

                                alert( "Usted compro: " + busqueda.nombre );

                            }else{

                                alert( "No hay stock de este producto" );
                            }
                        }
                    }

                    break;

                case "2":

                    break;

                default:

                    alert( "Valor no valido, Ingrese nuevamente" );
                    break;
            }

            bandera = 1;

            console.log( busqueda );

        }else{

            alert("Producto no encontrado ingrese nuevamente");
        }
    }
}

function validarStock(){

    let texto = "";
    let bandera = 0;

    let busqueda = array.filter( (objeto) => objeto.vendido == true );

    if( busqueda.length == 0 ){

        alert( "Todos los productos tienen stock" )
        bandera = 1;
    }

    for( let i = 0 ; i < busqueda.length ; i++ ){
        texto += busqueda[i].texto();
    }
    
    while( bandera == 0 ){

        let entrada = prompt( "Productos sin stock\n\n" + texto + "Ingresar Codigo de producto");

        busqueda = array.find( (objeto) => objeto.codigo == entrada );

        if( busqueda != undefined ){

            for( let i = 0 ; i < array.length ; i++ ){

                if( ( array[i].codigo == entrada ) ){

                    if( array[i].vendido == true ){

                        array[i].vendido = false;

                        alert( "Operacion realizada exitosamente" );

                        bandera = 1;

                    }
                }
            } 

        }else{

            alert( "Codigo inexistente, ingrese nuevamente" );
        }
    }
}