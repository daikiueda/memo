var expect = chai.expect;

describe( "String", function(){

    describe( ".split( '' )", function(){
        it( "配列になる。", function(){
            expect( "ABCDEFG".split( "" ) ).to.be.an( "array" );
        } );
        it( ".length は文字数。", function(){
            expect( "ABCDEFG".split( "" ) ).to.have.length( 7 );
        } );
        it( ".reverse() して join() すると逆さ読みになる。", function(){
            expect( "ABCDEFG".split( "" ).reverse().join( "" ) ).to.equal( "GFEDCBA" );
        } );
        it( "2バイト文字でも同様。", function(){
            expect( "がぎぐげご".split( "" ).reverse().join( "" ) ).to.equal( "ごげぐぎが" );
        } );
        
        describe( "サロゲートペア文字の場合", function(){
            it( ".length は1にならず、2になる。", function(){
                expect( String.fromCharCode( 0xD842, 0xDFB7 ).split( "" ) )
                    .not.to.have.length( 1 )
                    .and.equal( 2 );
            } );
        } );
    } );
} );
