function getLocation() {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                //these 2 lines below is for testing
                // latitude = 10.773832796366763;
                // longitude = 106.65923044859811;
                // document.getElementById("coordinates").textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;


                // Points on the image map with GPS coordinates
                const points = {
                    //streetline
                    'gate1': { lat: 10.772058770420456, lon: 106.65790898396898 },
                    'gate2': { lat: 10.772699511183433, lon: 106.66053337540292 },
                    'gate3': { lat: 10.773922434355761, lon: 106.66142183333362 },
                    '1a': { lat: 10.772113297499391, lon: 106.65801245272863 },
                    '1b': { lat: 10.771857649097987, lon: 106.65816317681188 },
                    '1c': { lat: 10.772847590010096, lon: 106.65847867254682 },
                    '1d': { lat: 10.772532441611954, lon: 106.65869559530134 },
                    '2a': { lat: 10.77291985993762, lon: 106.65862183455343 },
                    '2b': { lat: 10.772561590638283, lon: 106.6588511634242 },
                    '2c': { lat: 10.772279734256971, lon: 106.65901611927862 },
                    '2d': { lat: 10.77217713616312, lon: 106.65905098799581 },
                    '2e': { lat: 10.772011217020829, lon: 106.65914084199781 },
                    '3a': { lat: 10.773558008058968, lon: 106.65894638184423 },
                    '3b': { lat: 10.773228806138931, lon: 106.6591395008933 },
                    '4a': { lat: 10.773450387560926, lon: 106.65937151197309 },
                    '4b': { lat: 10.773360882190104, lon: 106.65941040400381 },
                    '4c': { lat: 10.772999978479218, lon: 106.6596424150836 },
                    '4d': { lat: 10.772615359880005, lon: 106.65986369732732 },
                    '4e': { lat: 10.772462615684313, lon: 106.65997769121046 },
                    '5a': { lat: 10.773719562246258, lon: 106.65934334877844 },
                    '5b': { lat: 10.773524659706766, lon: 106.6594814825427 },
                    '6a': { lat: 10.774288871265272, lon: 106.659445272721 },
                    '6b': { lat: 10.77391479402564, lon: 106.65960218194837 },
                    '7*': { lat: 10.774597322013987, lon: 106.65960352305288 },
                    '7a': { lat: 10.774426134357721, lon: 106.65969874147291 },
                    '7b': { lat: 10.774094216118675, lon: 106.65987979058141 },
                    '7c': { lat: 10.773849250177923, lon: 106.66002597097273 },
                    '7d': { lat: 10.773738665487967, lon: 106.6600943673026 },
                    'm7': { lat: 10.77351214378103, lon: 106.66021640781278 },
                    '7e': { lat: 10.773325392932657, lon: 106.6602915096652 },
                    '8a': { lat: 10.774801199057235, lon: 106.65996293906088 },
                    '8b': { lat: 10.774672170266, lon: 106.66004474643583 },
                    '8c': { lat: 10.774271744252324, lon: 106.66025798205251 },
                    '8d': { lat: 10.773939825843078, lon: 106.6604712176692 },
                    '9a': { lat: 10.775668663043174, lon: 106.65974970344419 },
                    '9b': { lat: 10.775426333298501, lon: 106.65987174395437 },
                    '9c': { lat: 10.775157654186055, lon: 106.66001792434568 },
                    '9d': { lat: 10.774923228788486, lon: 106.66015337590093 },
                    '9e': { lat: 10.774770485763506, lon: 106.66025395873899 },
                    '10a': { lat: 10.775906216816935, lon: 106.66034381274099 },
                    '10b': { lat: 10.775782458323176, lon: 106.66042830232496 },
                    '10c': { lat: 10.77551641444281, lon: 106.66057448271627 },
                    '10d': { lat: 10.775081735619253, lon: 106.66082795146818 },

                    '2d.4d': { lat: 10.772336015859993, lon: 106.65936408235956 },

                    'a5-hta5':{ lat: 10.773352982896292, lon: 106.6597213338446 },
                    // '4e': { lat: , lon:  },
                    //b1
                    'b1-303': { lat: 10.771631170802417, lon: 106.65838267944842 },
                    'b1-302': { lat: 10.771526468264536, lon: 106.65845745537284 },
                    'b1-301': { lat: 10.771452722005296, lon: 106.65850460347222 },
                    'b1-300a': { lat: 10.771375361027658, lon: 106.65853467167459 },
                    'b1-300b': { lat: 10.771304089239223, lon: 106.6585853356954 },
                    'b1-205': { lat: 10.771796513759496, lon: 106.65832098864108 },
                    
                    'b1-305': { lat: 10.77187561684591, lon: 106.65844675500544 },
                    'b1-306': { lat: 10.771956586486208, lon: 106.65855702368923 },
                    'b1-307': { lat: 10.772008059245177, lon: 106.65867563727794 },
                    
                    'b1-209': { lat: 10.771989394903782, lon: 106.65880080725024 },
                    'b1-308': { lat: 10.771929834125908, lon: 106.65883358982306 },
                    'b1-309': { lat: 10.771838983268653, lon: 106.65888127384811 },
                    'b1-310': { lat: 10.771794061039207, lon: 106.65890809610197 },
                    'b1-311': { lat: 10.771731572514604, lon: 106.65894385899797 },
                    'b1-312': { lat: 10.771683722540454, lon: 106.65896770092864 },
                    'b1-313': { lat: 10.771635872558708, lon: 106.65899154285931 },
                    'b1-314': { lat: 10.771585094839713, lon: 106.65902432543213 },
                    'b1-315': { lat: 10.77151382308083, lon: 106.65905412784547 },

                    //b2
                    'b2-214': { lat: 10.772187111350545, lon: 106.65959178916322},
                    'b2-213': { lat: 10.77215277474264, lon: 106.65951936951981 },
                    'b2-212': { lat: 10.772113085900804, lon: 106.65945767871247 },
                    'b2-211': { lat: 10.772078666942459, lon: 106.65939598790513 },
                    'b2-210': { lat: 10.772044247980173, lon: 106.65933966151582 },
                    'b2-209': { lat: 10.772002006521072, lon: 106.65927260629044 },
                    'b2-208': { lat: 10.77196503494674, lon: 106.65920018664704 },

                    'b2-301': { lat: 10.772105839804619, lon: 106.65898829213486 },
                    'b2-302': { lat: 10.772042683481773, lon: 106.65902047864304 },
                    'b2-303': { lat: 10.77200348867762, lon: 106.65904998294221 },
                    'b2-304': { lat: 10.771898420227878, lon: 106.65910094491349 },
                    'b2-305': { lat: 10.77183032333687, lon: 106.65914386025773 },
                    'b2-306': { lat: 10.771777706744283, lon: 106.65917068234788 },
                    'b2-307': { lat: 10.771732994984673, lon: 106.65920018664704 },
                    'b2-308': { lat: 10.771677743427235, lon: 106.6592296909462 },

                    //b3
                    'b3-101': { lat: 10.772741893290858, lon: 106.65781827393306 },
                    'b3-102': { lat: 10.772679949926012, lon: 106.6578607122285 },
                    'b3-103': { lat: 10.77263316662442, lon: 106.6578800025169 },
                    'b3-104': { lat: 10.772542087278968, lon: 106.6579108670207 },
                    'b3-105': { lat: 10.772480143873029, lon: 106.6579687374621 },
                    'b3-106': { lat: 10.77242957059701, lon: 106.65800345989646 },
                    'b3-107': { lat: 10.772318356640529, lon: 106.65802275018487 },
                    'b3-108': { lat: 10.772358744199888, lon: 106.65810762677575 },
                    'b3-109': { lat: 10.772431939207555, lon: 106.65823108373152 },
                    'b3-110': { lat: 10.772452073749447, lon: 106.65826966430838 },
                    'b3-111': { lat: 10.772465737196022, lon: 106.65833139331609 },
                    'b3-112': { lat: 10.772474576796037, lon: 106.65837861617647 },
                    'b3-113': { lat: 10.772536164609843, lon: 106.658435561043 },
                    'b3-114': { lat: 10.7725955022635, lon: 106.65854358585287 },
                    'b3-115': { lat: 10.77264962852896, lon: 106.6585975985756 },

                    //b4
                    'b4-301': { lat: 10.773032634846217, lon: 106.65849767575882 },
                    'b4-302': { lat: 10.773072566385762, lon: 106.65861066721469 },
                    'b4-303': { lat: 10.773130864331028, lon: 106.65866967581302 },
                    'b4-304': { lat: 10.773199454978164, lon: 106.65881719730884 },
                    'b4-305': { lat: 10.773252236005732, lon: 106.65889229916125 },
                    'b4-306': { lat: 10.773271009910328, lon: 106.65895935438662 },
                    'b4-htb4': { lat: 10.77318973865695, lon: 106.6589727654317 },

                    //b6
                    'gdb6': { lat: 10.773932871641383, lon: 106.65920343540698 },
                    'b6-301': { lat: 10.773651016543631, lon: 106.65889498137027 },
                    'b6-302': { lat: 10.77372784122834, lon: 106.65897812984973 },
                    'b6-303': { lat: 10.773772552691751, lon: 106.65905323170215 },
                    'b6-304': { lat: 10.77380672443189, lon: 106.65912565134555 },
                    'b6-305': { lat: 10.773843531097045, lon: 106.65921148203402 },
                    'b6-306': { lat: 10.773911956898816, lon: 106.65936168573886 },

                    //a5
                    'a5-hta5':{ lat: 10.773443406357048, lon:106.65966343597727},
                    'a5-101':{ lat: 10.773305620986108, lon:106.65985696151778},
                    'a5-102':{ lat: 10.773266388437955, lon:106.65977316123674},
                    'a5-103':{ lat: 10.773215241717685, lon:106.65966786782711},
                    'a5-104':{ lat: 10.773221471507924, lon:106.65961940867118},
                    'a5-105':{ lat: 10.77337126750349, lon:106.6595260678302},
                    'a5-106':{ lat: 10.773479102085876, lon:106.6595190942341},
                    'a5-107':{ lat: 10.773597212844809, lon:106.65973528029707},
                    'a5-108':{ lat: 10.77354879594279, lon: 106.65979267955362},
                    'a5-109':{ lat: 10.773386813350587, lon:106.65989084848133},

                    //a4
                    'a4-401':{ lat: 10.773366095659794, lon:106.66000947216888},
                    'a4-402':{ lat: 10.773387240980806, lon:106.6600539968549},
                    'a4-407':{ lat: 10.773497249247669, lon:106.6600336123365},
                    'a4-408':{ lat: 10.773510028683276, lon:106.66001108175622},
                    'a4-409':{ lat: 10.773584070113193, lon:106.65997031218738},
                    'a4-410':{ lat: 10.773634200301522, lon:106.65989681869449},
                    'a4-411':{ lat: 10.773674514746876, lon:106.65988394422628},
                    'a4-412':{ lat: 10.773710876671165, lon:106.65988394441045},
                    'a4-413':{ lat: 10.773663184216389, lon:106.6598281548231},

                    //b8
                    'b8-301':{ lat: 10.77388285869933, lon:106.66047329244466},
                    'b8-302':{ lat: 10.773831543445489, lon:106.66038316995983},
                    'b8-303':{ lat: 10.773825087837228, lon:106.66036493084849},
                    'b8-304':{ lat: 10.773759346438746, lon:106.66024798631443},

                    //c1
                    'c1-101b':{ lat: 10.774728666955621, lon:106.65960345137273},
                    'c1-108':{ lat: 10.774909487972696, lon:106.65940228602403},
                    'c1-109':{ lat: 10.774921806219364, lon:106.65938458367373},
                    'c1-110':{ lat: 10.774925692610934, lon: 106.65936902689418},
                    'c1-111':{ lat: 10.774905206097689, lon:106.65933093949343},
                    'c1-105':{ lat: 10.774559635948986, lon:106.65918824675964},
                    'c1-104':{ lat: 10.774587631970375, lon:106.65924028168001},
                    'c1-103':{ lat: 10.774611412097643, lon:106.65935454388227},
                    'c1-102a':{ lat: 10.774632162098953, lon:106.65939692291568},
                    'c1-102b':{ lat: 10.77466437400444, lon:106.65945754093764},
                    'c1-201a':{ lat: 10.774553246163055, lon:106.65925637526152},
                    'c1-201b':{ lat: 10.77458335017123, lon:106.65930626444742},
                    'c1-202':{ lat: 10.774611346190419, lon:106.6593497162662},
                    'c1-203':{ lat: 10.774692633484111, lon:106.65950099292013},
                    'c1-204':{ lat: 10.774720629493135, lon:106.65955088210603},
                    'c1-205':{ lat: 10.77475494929373, lon:106.65962866616746},
                    'c1-206':{ lat: 10.77479559296415, lon:106.65970430449443},

                    //b10
                    'b10-201': { lat: 10.77377089331696, lon:106.66083752631393},
                    'b10-202': { lat: 10.773814698695457, lon:106.6609145057454},
                    'b10-203': { lat: 10.773856001255146, lon:106.66097807413179},
                    'b10-204': { lat: 10.773892231491011, lon:106.66105156672428},
                    'b10-205': { lat: 10.77394110937784, lon:106.66114437117257},
                    'b10-206': { lat: 10.773994203156958, lon:106.66122000949953},
                    'b10-207': { lat: 10.774026217509148, lon:106.66127848162331},
                    'b10-301': { lat: 10.77377089331696, lon:106.66083752631393},
                    'b10-302': { lat: 10.773814698695457, lon:106.6609145057454},
                    'b10-303': { lat: 10.773856001255146, lon:106.66097807413179},
                    'b10-304': { lat: 10.773892231491011, lon:106.66105156672428},
                    'b10-305': { lat: 10.77394110937784, lon:106.66114437117257},
                    'b10-306': { lat: 10.773994203156958, lon:106.66122000949953},
                    'b10-307': { lat: 10.774026217509148, lon:106.66127848162331},

                    //b11
                    'b11-101': {  lat: 10.774061736056998, lon:106.6604914021323},
                    'b11-102': {  lat: 10.774080377995928, lon:106.66048442845434},
                    'b11-103': {  lat: 10.774130046378389, lon:106.66045975226237},
                    'b11-104': {  lat: 10.774159228178577, lon:106.66043775827941},
                    'b11-105': {  lat: 10.774236299677458, lon:106.6603787498448},
                    'b11-106': {  lat: 10.774463891237025, lon:106.66026448796995},
                    'b11-107': {  lat: 10.774536747086993, lon:106.66022264622964},
                    'b11-108': {  lat: 10.774556377132718, lon:106.6602086982189},
                    'b11-109': {  lat: 10.774599721639342, lon:106.66017543908904},
                    'b11-110': {  lat: 10.774662037608918, lon:106.66014647126443},
                    'b11-201': {  lat: 10.774061736056998, lon:106.6604914021323},
                    'b11-202': {  lat: 10.774080377995928, lon:106.66048442845434},
                    'b11-203': {  lat:10.774130046378389, lon:106.66045975226237},
                    'b11-204': {  lat: 10.774159228178577, lon:106.66043775827941},
                    'b11-205': {  lat: 10.774236299677458, lon:106.6603787498448},
                    'b11-206': {  lat: 10.774463891237025, lon:106.66026448796995},
                    'b11-207': {  lat: 10.774536747086993, lon:106.66022264622964},
                    'b11-208': {  lat: 10.774556377132711, lon:106.6602086982189},
                    'b11-209': {  lat: 10.774599721639342, lon:106.66017543908904},
                    'b11-210': {  lat: 10.774662037608918, lon:106.66014647126443},
                };
                
                // Initialize variables to keep track of the nearest point and its distance
                let nearestPoint = null;
                let minDistance = Number.MAX_VALUE;
                
                // Calculate the distance to each point and find the nearest point
                // Haversine formula
                for (const pointName in points) {
                    const point = points[pointName];
                    const lat2 = point.lat;
                    const lon2 = point.lon;
                
                    const dLat = (lat2 - latitude) * (Math.PI / 180);
                    const dLon = (lon2 - longitude) * (Math.PI / 180);
                
                    const a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(latitude * (Math.PI / 180)) *
                    Math.cos(lat2 * (Math.PI / 180)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
                
                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    const distance = 6371 * c; // Radius of the Earth in kilometers
                
                    if (distance < minDistance) {
                    minDistance = distance;
                    nearestPoint = pointName;
                    }
                }
                
                //console.log(`Nearest point: ${nearestPoint} (Distance: ${minDistance} km)`);

                resolve(`${nearestPoint}`);
                
            }, function(error) {
                reject("Error getting location: " + error.message);

            }, { enableHighAccuracy: true });
        } else {
            reject("Geolocation is not supported by your browser.");
        }
    });
}

async function GPS() {
    const result_1 = await getLocation();
    const dijkstraResult = graph.Dijkstra(result_1, end());
    return dijkstraResult;
}