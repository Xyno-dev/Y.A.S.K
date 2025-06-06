function bigboard_extrude_1_outline_fn(){
    return new CSG.Path2D([[48,-110.5],[48,-38.5]]).appendArc([50,-36.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([309,-36.5]).appendArc([311,-38.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([311,-110.5]).appendArc([309,-112.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([50,-112.5]).appendArc([48,-110.5],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bigbottom_case_fn() {
                    

                // creating part 0 of case bigbottom
                let bigbottom__part_0 = bigboard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bigbottom__part_0_bounds = bigbottom__part_0.getBounds();
                let bigbottom__part_0_x = bigbottom__part_0_bounds[0].x + (bigbottom__part_0_bounds[1].x - bigbottom__part_0_bounds[0].x) / 2
                let bigbottom__part_0_y = bigbottom__part_0_bounds[0].y + (bigbottom__part_0_bounds[1].y - bigbottom__part_0_bounds[0].y) / 2
                bigbottom__part_0 = translate([-bigbottom__part_0_x, -bigbottom__part_0_y, 0], bigbottom__part_0);
                bigbottom__part_0 = rotate([0,0,0], bigbottom__part_0);
                bigbottom__part_0 = translate([bigbottom__part_0_x, bigbottom__part_0_y, 0], bigbottom__part_0);

                bigbottom__part_0 = translate([0,0,0], bigbottom__part_0);
                let result = bigbottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bigbottom_case_fn();
            }

        