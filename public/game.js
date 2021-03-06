var app = new Vue({
	el: '#app',
	data: {
		userLoggedIn: false,
		mensaje: '',
		mensajes: [],
		chatId: "",
		userEmail: '',
		userPassword: '',
		show: "home",
		filteredGames: [],
		teams: ["U1", "U2", "U3", "U4", "U5", "U6", "All Teams"],
		selectedTeam: "",
		listado: [],
		games: {
			september: [{
					Dates: "9/01",
					Teams: "U1 x U4",
					Times: "9:30 a.m.",
					Location: "AJ Katzenmaier",
					Address: "24 W. Walton St., Chicago, IL 60610",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
					Id: "1",
					LocId: "A",
					Chat: []
				},
				{
					Dates: "9/01",
					Teams: "U3 x U2",
					Times: "1:00 p.m.",
					Location: "Greenbay",
					Address: "1734 N. Orleans St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745258!2d-87.64002798526307!3d41.913806271159174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575055703462!5m2!1ses-419!2sar",
					Id: "2",
					LocId: "B",
					Chat: []
				},
				{
					Dates: "9/08",
					Teams: "U5 x U6",
					Times: "9:30 a.m.",
					Location: "Howard A Yeager",
					Address: "2245 N. Southport Ave., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
					Id: "3",
					LocId: "C",
					Chat: []

				},
				{
					Dates: "9/08",
					Teams: "U6 x U1",
					Times: "1:00 p.m.",
					Location: "Marjorie P Hart",
					Address: "2625 N. Orchard St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
					Id: "4",
					LocId: "D",
					Chat: []
				},
				{
					Dates: "9/15",
					Teams: "U2 x U4",
					Times: "9:30 a.m.",
					Location: "North",
					Address: "1409 N. Ogden Ave., Chicago, IL 60610",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492138!2d-87.64837698511293!3d41.907096479219845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148146827!5m2!1ses-419!2sar",
					Id: "5",
					LocId: "E",
					Chat: []
				},
				{
					Dates: "9/15",
					Teams: "U3 x U5",
					Times: "1:00 p.m.",
					Location: "AJ Katzenmaier",
					Address: "24 W. Walton St., Chicago, IL 60610",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
					Id: "6",
					LocId: "A",
					Chat: []
				},
				{
					Dates: "9/22",
					Teams: "U1 x U3",
					Times: "9:30 a.m.",
					Location: "South",
					Address: "2101 N. Fremont St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7479505250676!2d-87.65355538511241!3d41.91977677921889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148227043!5m2!1ses-419!2sar",
					Id: "7",
					LocId: "F",
					Chat: []
				},
				{
					Dates: "9/22",
					Teams: "U2 x U6",
					Times: "1:00 p.m.",
					Location: "Howard A Yeager",
					Address: "2245 N. Southport Ave., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
					Id: "8",
					LocId: "C",
					Chat: []
				},
				{
					Dates: "9/27",
					Times: "9:30 a.m.",
					Teams: "U4 x U5",
					Location: "Greenbay",
					Address: "1734 N. Orleans St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745258!2d-87.64002798526307!3d41.913806271159174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575055703462!5m2!1ses-419!2sar",
					Id: "9",
					LocId: "B",
					Chat: []
				}
			],
			october: [{
					Dates: "10/06",
					Teams: "U2 x U5",
					Times: "9:30 a.m.",
					Location: "Marjorie P Hart",
					Address: "2625 N. Orchard St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
					Id: "10",
					LocId: "D",
					Chat: []
				},
				{
					Dates: "10.06",
					Teams: "U1 x U6",
					Times: "1:00 p.m.",
					Location: "South",
					Address: "2101 N. Fremont St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7479505250676!2d-87.65355538511241!3d41.91977677921889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148227043!5m2!1ses-419!2sar",
					Id: "11",
					LocId: "F",
					Chat: []
				},
				{
					Dates: "10/13",
					Teams: "U3 x U4",
					Times: "9:30 a.m.",
					Location: "Howard A Yeager",
					Address: "2245 N. Southport Ave., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
					Id: "12",
					LocId: "C",
					Chat: []
				},
				{
					Dates: "10/13",
					Teams: "U5 x U1",
					Times: "1:00 p.m.",
					Location: "Greenbay",
					Address: "1734 N. Orleans St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745258!2d-87.64002798526307!3d41.913806271159174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575055703462!5m2!1ses-419!2sar",
					Id: "13",
					LocId: "B",
					Chat: []
				},
				{
					Dates: "10/20",
					Teams: "U6 x U3",
					Times: "9:30 a.m.",
					Location: "North",
					Address: "1409 N. Ogden Ave., Chicago, IL 60610",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492138!2d-87.64837698511293!3d41.907096479219845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148146827!5m2!1ses-419!2sar",
					Id: "14",
					LocId: "E",
					Chat: []
				},
				{
					Dates: "10/20",
					Teams: "U2 x U4",
					Times: "1:00 p.m.",
					Location: "Marjorie P Hart",
					Address: "2625 N. Orchard St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
					Id: "15",
					LocId: "D",
					Chat: []
				},
				{
					Dates: "10/27",
					Teams: "U3 x U1",
					Times: "9:30 a.m.",
					Location: "AJ Katzenmaier",
					Address: "24 W. Walton St., Chicago, IL 60610",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
					Id: "16",
					LocId: "A",
					Chat: []
				},
				{
					Dates: "10/27",
					Teams: "U2 x U6",
					Times: "1:00 p.m.",
					Location: "Howard A Yeager",
					Address: "2245 N. Southport Ave., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
					Id: "17",
					LocId: "C",
					Chat: []
				}
			]
		},

	},
	computed: {
		locationList: function () {
			let locations = [];
			this.games.september.forEach(info => {
				if (locations.findIndex(subInfo => subInfo.Location == info.Location) == -1)
					locations.push(info);
			});
			locations.sort();
			return locations;
		},


	},
	methods: {
		filterTeam: function () {
			var i = 0;
			this.filteredGames = [];
			var selection = this.selectedTeam;
			var listado = this.games.september.concat(this.games.october)

			for (i = 0; i < listado.length; i++) {

				if (listado[i].Teams.includes(selection) || selection == "All Teams") {
					this.filteredGames.push(listado[i])

				}
			}
		},

		display: function (page) {
			this.show = page;
		},
		send: function (gameId) {
			let postData = {
				texto: this.mensaje,
				email: firebase.auth().currentUser.email,
				game: gameId,
				time: new Date().toLocaleString("en-US", {
					timeZone: "America/Argentina/Buenos_Aires"
				})
			};

			firebase.database().ref().push(postData).then(function (result) {
				alert("Your message was sent!")
				app.mensaje = ""
			});
		},
		loginGoogle: function () {
			let provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithPopup(provider).then(function () {
				alert("You're in! Now find your game and enter the chat!");
				app.display("games");

			});

		},
		register: function () {
			firebase.auth().createUserWithEmailAndPassword(app.userEmail, app.userPassword)
				.then(function () {
					alert("You're in! Now find your game and enter the chat!");
					app.display("games");

				})
				.catch(function (error) {
					console.log("error papa" + error)
				})
		},
		loginEmail: function () {
			firebase.auth().signInWithEmailAndPassword(app.userEmail, app.userPassword)
				.then(function () {
					alert("You're in! Now find your game and enter the chat!");
					app.display("games");


				})
				.catch(function (error) {
					console.log("error de login" + error)
				})

		},

		detectLogin: function (user) {
			this.userLoggedIn = user != null;
		},

		updateShow: function (x) {
			this.show = 'chat';
			this.chatId = x;

		}
	}
})

firebase.database().ref('/').on('child_added', function (data) {
	app.mensajes.push(data.val())
})

firebase.auth().onAuthStateChanged(app.detectLogin);
