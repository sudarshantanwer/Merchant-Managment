/**
 * Created by sudarshan on 17/1/18.
 */

export const Merchants = [ {
        id: 'merchant_1',
        firstname: 'John',
        lastname: 'Cena',
        avatarUrl: 'http://google.com',
        email: 'test@gmail.com',
        phone: '8788999576',
        hasPremium: false,
        bids: [] //Array<Bid>
},{
    id: 'merchant_2',
    firstname: 'Brock',
    lastname: 'Lsner',
    avatarUrl: 'http://google.com',
    email: 'test@gmail.com',
    phone: '8788999576',
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
    firstname: 'Triple',
    lastname: 'H',
    avatarUrl: 'http://google.com',
    email: 'test@gmail.com',
    phone: '8788999576',
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
}];