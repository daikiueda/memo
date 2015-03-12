if( !chai ) var chai = require( "chai" );
var expect = chai.expect;

describe( "Array", function(){

    describe( ".push()", function(){
        it( "返却値は、実行後の配列のlength。なんでだろう。", function(){
            expect( [ "hoge" ].push( "foo", "bar" ) ).to.equal( 3 );
        } );
    } );
} );
