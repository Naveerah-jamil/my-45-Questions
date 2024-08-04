let guest_list: string []= ['Insharah','Nabiha','Fatima','Maha'];
for(let i=0; i<guest_list.length; i++) {
    console.log('Respected sir/madam' + guest_list[i] + ',\nWe invited you on dinner tommorow.\nThank you\n')
}
let notPresent: string = "Fatima";
let new_guest: string = "Mania";
guest_list[2] = new_guest;
console.log(`Mr. ${notPresent} will not come for tmmorrow dinner`)
