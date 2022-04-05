const FullName = [

    {
        Name: 'Thirdy',
        Age: '20',
        favorite: 'bikers'
    },
    {
        Name: 'jonny',
        Age: '25',
        favorite: 'billiard'
    },
    {
        Name: 'renan',
        Age: '21',
        favorite: 'gym'
    },
];


const favorites = FullName.filter(
    function(favorite){
        return favorite.favorite == 'bikers';
    }
);

console.log(favorites);