if( !chai ) var chai = require( "chai" );
var expect = chai.expect;

describe( "Number", function(){

    describe( "8進数リテラル", function(){
        it( "0o10 === 8", function(){
            expect( 0o10 ).to.equal( 8 );
        } );

        it( "010 === 8", function(){
            expect( 010 ).to.equal( 8 );
        } );

        it( "Number('0o010') // => 8", function(){
            expect( Number('0o010') ).to.equal( 8 );
        } );

        it( "Number('010') // => 10", function(){
            expect( Number('010') ).to.equal( 10 );
        } );

        it( "parseInt('0o10') // => 0", function(){
            expect( parseInt('0o10') ).to.equal( 0 );
        } );

        it( "parseInt('010') // => 10", function(){
            expect( parseInt('010') ).to.equal( 10 );
        } );
    } );
} );
