var expect = chai.expect;

describe( "Function", function(){


    describe( "arguments", function(){
        it( "Array.prototype.slice.call( arguments )", function(){
            var argTypes = ( function returnArgumentTypesArray(){
                return Array.prototype.slice.call( arguments ).map( function( value ){ return typeof( value ); } );
            } )( 1, "hoge", function(){} );

            expect( argTypes ).to.eql( [ "number", "string", "function" ] );
        } );

        it( "[].slice.call( arguments )", function(){
            var argTypes = ( function returnArgumentTypesArray(){
                return [].slice.call( arguments ).map( function( value ){ return typeof( value ); } );
            } )( 1, "hoge", function(){} );

            expect( argTypes ).to.eql( [ "number", "string", "function" ] );
        } );
    } );

    describe( ".length", function(){
        it( "関数オブジェクトのlengthプロパティで、仮引数の数が取得できる。", function(){
            expect( ( function(){} ).length ).to.equal( 0 );
            expect( ( function( hoge ){} ).length ).to.equal( 1 );
            expect( ( function( hoge, foo ){} ).length ).to.equal( 2 );
        } );
    } );

    describe( ".toString()", function(){
        // https://github.com/sindresorhus/multiline
        it( "コメントも含まれる。", function(){
            expect( ( function(){ /* comment */ } ).toString() ).to.contain( "/* comment */" );
        } );
        it( "コメントの改行も含まれる。", function(){
            expect( ( function(){/* Line1(\n)
                Line2(\n)
            */ } ).toString().match( /\n/g ).length ).to.equal( 2 );
        } );
    } );
} );
