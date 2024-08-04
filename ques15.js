var guest_list = ['Insharah', 'Nabiha', 'Fatima', 'Maha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/madam' + guest_list[i] + ',\nWe invited you on dinner tommorow.\nThank you\n');
}
var notPresent = "Fatima";
var new_guest = "Mania";
guest_list[2] = new_guest;
console.log("Mr. ".concat(notPresent, " will not come for tmmorrow dinner"));
