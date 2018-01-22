/**
 * Created by sudarshan on 17/1/18.
 */

export const Merchants = [ {
        id: 'merchant_1',
        firstname: 'John',
        lastname: 'Snow',
        avatarUrl: 'http://john.png',
        email: 'john@gmail.com',
        phone: '99784224224',
        hasPremium: false,
        bids: [] //Array<Bid>
},{
    id: 'merchant_2',
    firstname: 'Brock',
    lastname: 'Cruise',
    avatarUrl: 'http://brook/profile.png',
    email: 'brook@gmail.com',
    phone: '22424242424',
    hasPremium: false,
    bids: [{
        id: 'bid_1233',
        carTitle: 'XYZ',
        amount: 2033323,
        created: '12/09/16'
    }, {
        id: 'bid_2455',
        carTitle: 'ABC',
        amount: 4522,
        created: '12/10/16'
    }] //Array<Bid>
},{
    id: 'merchant_3',
    firstname: 'Jack',
    lastname: 'Amper',
    avatarUrl: 'http://jack.jpg',
    email: 'jack@gmail.com',
    phone: '76473442344',
    hasPremium: true,
    bids: [{
        id: 'bid_1',
        carTitle: 'ABC',
        amount: 1000,
        created: '12/10/16'
    }, {
        id: 'bid_2',
        carTitle: 'ABC',
        amount: 1000,
        created: '12/10/16'
    }] //Array<Bid>
},
    {
        id: 'merchant_33',
        firstname: 'Alfet',
        lastname: 'Max',
        avatarUrl: 'http://alfet.png',
        email: 'alfet@gmail.com',
        phone: '22223234832',
        hasPremium: true,
        bids: [{
            id: 'bid_1',
            carTitle: 'ABC',
            amount: 1000,
            created: '12/10/16'
        }, {
            id: 'bid_2',
            carTitle: 'ABC',
            amount: 1000,
            created: '12/10/16'
        }] //Array<Bid>
    },
    {
        id: 'merchant_4',
        firstname: 'Rock',
        lastname: 'Blesar',
        avatarUrl: 'http://rock.png',
        email: 'rock@gmail.com',
        phone: '87434435443',
        hasPremium: true,
        bids: [{
            id: 'bid_123',
            carTitle: 'Car title here',
            amount: 1000,
            created: '12/10/16'
        }, {
            id: 'bid_2',
            carTitle: 'ABC',
            amount: 1000,
            created: '12/10/16'
        }] //Array<Bid>
    }];