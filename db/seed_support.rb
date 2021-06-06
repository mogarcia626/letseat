require 'tod'

class Cuisine

    attr_reader :cuisines
    def initialize
        @cuisines = {}

        @cuisines['thai'] = {
            first: ['Thai', 'Tomyum', 'Somtum', 'Siam', 'Royal', 'House of', 'Pearl Thai', 'Koon Thai', 'Lemongrass'],
            second: ['Thai', 'Bistro', 'Siam', 'Village', 'Orchid', 'Kitchen', 'Basil', 'House', 'Palace'] }        
        @cuisines['pizza'] = {
            first: ['Pizza', 'Slice', 'Pizzeria', 'Antonio\'s', 'Zamboni\'s', 'Red Pepper', 'Mozarella', 'Chicago Pizza', 'Lombardi Bros', 'Luca\'s', 'Ristorante'],
            second: ['Pizza', 'Pizzeria', 'House', 'Bistro', 'Kitchen', 'Harvest', 'Deli'] }
        @cuisines['chinese'] = {
            first: ['Wah Fung', 'Shanghai', 'Szechuan', 'Hunan', 'Golden', 'Empress', 'Great Wall', 'Shandong', 'Mandarin', 'Chow'],
            second: ['Noodle House', 'Tea House', 'Kitchen', 'Bistro', 'Garden', 'Dragon', 'Empress', 'Dumpling'] }        
        @cuisines['vietnamese'] ={
            first: ['Banh Mi', 'Pho', 'Saigon', 'Hanoi', 'Lemon Pepper', 'Fresh', 'Vien', 'Huong', 'Mekong'],
            second: ['Cafe', 'Banh Mi', 'Pho', 'King', 'Vietnamese Cuisine', 'Bistro', 'House', 'Kitchen', 'Deli'] }  
        @cuisines['sushi'] = {
            first: ['Sushi', 'Shimizu', 'Yojimbo', 'Kiraku', 'Toyosu', 'Banzai', 'Judoku', 'Demon Slayer', 'DomoDomo', 'Umami'],
            second: ['Bistro', 'Kitchen', 'Palace', 'Sushi', 'Ramen', 'Umami', 'Cafe'] }        
        @cuisines['arabic'] = {
            first: ['Leyla\'s', 'Rami\'s', 'Moustafa\'s', 'Tajin', 'Camel', 'Kabob', 'Bedouin', 'Reem\'s', 'Za\'atar', 'Qahwah'],
            second: ['Bistro', 'Kitchen', 'Cafe', 'Shawarma', 'Eatery', 'Azama', 'Majlis', 'Grill'] }        
        @cuisines['steakhouse'] = {
            first: ['Salt', 'Ranchers', 'Tony\'s', 'Village', 'Quality', 'Texas', 'Wyoming', 'Brazil', 'Prime'],
            second: ['Steakhouse', 'Meat Company', 'Company', ' and Charcoal', 'Prime Rib', 'Grill', 'Butchers'] }        
        @cuisines['korean'] = {
            first: ['K', 'Haeynyeo', 'Moo Bong Ri', 'Jong Ga', 'Bibimpbap', 'Seoul', 'Dan Sung', 'Bon Chon', 'Korea', 'Gangnam'],
            second: ['Galbi', 'Kitchen', 'House', 'Bistro', 'Fried Chicken', 'Sa', 'Tofu House', 'Tofu', 'Grill'] }        
        @cuisines['latin american'] = {
            first: ['Cholita', 'Casa', 'Havana', 'Sol', 'Platano', 'Empanada', 'La Bodeguita', 'Cafe', 'Arepa', 'Parada'],
            second: ['Cafe', 'Havana', 'Latina', 'Linda', '', 'Bistro', 'Cafe', 'Caracas', 'Ceviche'] }        
        @cuisines['mexican'] = {
            first: ['Taqueria', 'Jalisco', 'Hacienda', 'Cocina', 'Molcajete', 'Ole Ole', 'Plato', 'Dos Hermanos', 'Hermanas', 'El Huarache'],
            second: ['Tacos', 'Burritos', 'Taqueria', 'Jalisco', 'Azteca', 'Mexicana', 'Barbacoa', 'Gordos', 'de Mazatlan', 'del Sur'] }        
        @cuisines['sea food'] = {
            first: ['Antonio\'s', 'Louisiana', 'Alaska', 'Peninsula', 'Pacific', 'Atlantic', 'Mariscos'],
            second: ['Seafood Restaurant', 'Seafood Grill', 'Crawfish', 'Fish Market', 'Oyster Company', 'Crab House', 'Crab Kitchen'] }
        @cuisines['south asian'] = {
            first: ['Tandoori', 'Biriyani', 'Masala', 'Lahore', 'Karahi', 'Nihari', 'Pakwan', 'Curry', 'Peshawari'],
            second: ['Oven', 'Kitchen', 'Kabob House', 'Bistro', 'Restaurant', 'House', 'Shalimar', 'Leaf'] }
    end
    

end


