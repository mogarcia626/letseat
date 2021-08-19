class Cuisine

    attr_reader :cuisines
    def initialize
        @cuisines = {}

        @cuisines['Thai'] = {
            first: ['Thai', 'Tomyum', 'Somtum', 'Siam', 'Royal', 'Pearl Thai', 'Lemongrass'],
            second: ['Thai', 'Bistro', 'Siam', 'Village', 'Orchid', 'Kitchen', 'Basil', 'House', 'Somtum'] }        
        @cuisines['Chinese'] = {
            first: ['Wah Fung', 'Shanghai', 'Szechuan', 'Hunan', 'Golden', 'Empress', 'Great Wall', 'Shandong', 'Mandarin', 'Chow'],
            second: ['Noodle House', 'Tea House', 'Kitchen', 'Bistro', 'Garden', 'Dragon', 'Empress', 'Dumpling'] }        
        @cuisines['Japanese'] = {
            first: ['Shimizu', 'Yojimbo', 'Kiraku', 'Toyosu', 'Banzai', 'Judoku', 'Demon Slayer', 'DomoDomo', 'Umami'],
            second: ['Sushi', 'Ramen', 'Umami', 'Cafe', 'Kyoto', 'Kitchen'] }            
        @cuisines['Seafood'] = {
            first: ['Mediterranean', 'Louisiana', 'Alaska', 'Peninsula', 'Pacific', 'Atlantic', 'Mariscos', 'Cajun'],
            second: ['Company', 'Grill', 'Seafood Restaurant', 'Seafood Grill', 'Crawfish', 'Fish Market', 'Oyster Company', 'Crab House', 'Crab Kitchen'] }
        @cuisines['Steakhouses'] = {
            first: ['Salt', 'Ranchers', 'Tony\'s', 'Village', 'Quality', 'Texas', 'Wyoming', 'Gaucho', 'Prime', 'Antonio\'s'],
            second: ['Steakhouse', 'Meat Company', 'Company', ' and Charcoal', 'Prime Rib', 'Grill', 'Butchers'] }        
        @cuisines['Latin American'] = {
            first: ['Cholita', 'Casa', 'Havana', 'Sol', 'Empanadas', 'La Bodeguita', 'Cafe', 'Arepas', 'Parada', 'Taqueria', 'Jalisco', 'Hacienda', 'Cocina', 'Molcajete', 'Ole Ole', 'Plato', 'Dos Hermanos'],
            second: ['Cafe', 'Havana', 'Latina', 'Linda', 'Cafe', 'Azteca', 'Gordos', 'de Mazatlan', 'del Sur'] }        
    end  
end


#@cuisines['Vietnamese'] ={
# first: ['Banh Mi', 'Pho', 'Saigon', 'Hanoi', 'Lemon Pepper', 'Fresh', 'Viet', 'Huong', 'Mekong'],
# second: ['Cafe', 'Banh Mi', 'Pho', 'King', 'Vietnamese Cuisine', 'Bistro', 'House', 'Kitchen', 'Deli'] }  
# @cuisines['Mexican'] = {
#     first: ['Taqueria', 'Jalisco', 'Hacienda', 'Cocina', 'Molcajete', 'Ole Ole', 'Plato', 'Dos Hermanos', 'Hermanas', 'El Huarache'],
#     second: ['Tacos', 'Burritos', 'Taqueria', 'Jalisco', 'Azteca', 'Mexicana', 'Barbacoa', 'Gordos', 'de Mazatlan', 'del Sur'] }        
# @cuisines['Indian & Pakistani'] = {
#     first: ['Tandoori', 'Biriyani', 'Masala', 'Lahore', 'Karahi', 'Nihari', 'Pakwan', 'Curry', 'Peshawari'],
#     second: ['Oven', 'Kitchen', 'Kabob House', 'Bistro', 'Restaurant', 'House', 'Shalimar', 'Leaf'] }
# @cuisines['Pizza'] = {
#     first: ['Pizza', 'Slice', 'Pizzeria', 'Antonio\'s', 'Zamboni\'s', 'Red Pepper', 'Mozarella', 'Chicago Pizza', 'Lombardi Bros', 'Luca\'s', 'Ristorante'],
#     second: ['Pizza', 'Pizzeria', 'House', 'Bistro', 'Kitchen', 'Harvest', 'Deli'] }