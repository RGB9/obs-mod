overdriveProjector = new OverdriveProjector("overdrive-projector"){{ 
 requirements(Category.effect, with(Items.lead, 100, Items.obsidian, 75, Items.silicon, 75, Items.plastanium, 30)); 
 consumes.power(3.50f); 
 size = 2; 
 consumes.item(Items.phaseFabric).boost(); 
 }};