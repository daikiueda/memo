var expect = chai.expect;

describe( "Function", function(){

    describe( ".length", function(){
        it( "関数オブジェクトのlengthプロパティで、仮引数の数が取得できる。", function(){
            expect( ( function(){} ).length ).equal( 0 );
            expect( ( function( hoge ){} ).length ).equal( 1 );
            expect( ( function( hoge, foo ){} ).length ).equal( 2 );
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
