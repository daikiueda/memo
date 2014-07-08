if( !chai ) var chai = require( "chai" );
var expect = chai.expect;

describe( "Date", function(){

    describe( "一年　※var today = new Date();", function(){
        
        var today = new Date();
        
        it( "今年（" + today.getFullYear() + "年）の元旦00:00 == new Date( today.getFullYear(), 0, 1 )", function(){
            var firstDayOfThisYear = new Date( today.getFullYear(), 0, 1 );
            
            expect( firstDayOfThisYear.getFullYear() ).to.equal( today.getFullYear() );
            expect( firstDayOfThisYear.toString() ).to.contain( "Jan 01" );
            expect( firstDayOfThisYear.toString() ).to.contain( "00:00" );
        } );
        
        it( "来年（" + ( today.getFullYear() + 1 ) + "年）の元旦00:00 == new Date( today.getFullYear() + 1, 0, 1 )", function(){
            var firstDayOfNextYear = new Date( today.getFullYear() + 1, 0, 1 );
            
            expect( firstDayOfNextYear.getFullYear() ).to.equal( today.getFullYear() + 1 );
            expect( firstDayOfNextYear.toString() ).to.contain( "Jan 01" );
            expect( firstDayOfNextYear.toString() ).to.contain( "00:00" );
        } );

        it( "今年一年の日数（ 今年 - 来年 ）", function(){
            var oneYear_ms = ( new Date( today.getFullYear() + 1, 0, 1 ) ) - ( new Date( today.getFullYear(), 0, 1 ) );
            
            expect( oneYear_ms / ( 1000 * 60 * 60 * 24 ) ).to.be.within( 365, 366 );
        } );
    } );
} );
