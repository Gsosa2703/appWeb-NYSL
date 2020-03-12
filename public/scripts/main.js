  var app = new Vue({
  el: '#app',
  data: {
    db: firebase.database(),
    gameChat: null,
    msgText: '',
    userEmail: null,
    userName: null,
    userPassword: null,
    mensajes: [],
    games: [
      {
        nombre: 'U1 vs U4',
        hora: '10:00',
        locacion: 'AJ Katzenmaier'
      },
      {
        nombre: 'U2 vs U3',
        hora: '13:00',
        locacion: 'Greenbay'
      },
      {
        nombre: 'U3 vs U1',
        hora: '17:00',
        locacion: 'Marjorie P. Hart'
      },
    ]
  },
  methods: {
    selectGame: function (game) {
      this.gameChat = game;
      this.mensajes = [];
      this.db.ref(this.gameChat.nombre).on('child_added', function (data) {
        app.mensajes.push(data.val());
      });
    },
    loginGoogle: function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(function (result) {
          app.userEmail = firebase.auth().currentUser.email;
          app.userName = firebase.auth().currentUser.displayName;
          $(".register").hide();
        })
    },

    register: function () {
      firebase.auth().createUserWithEmailAndPassword(this.userEmail, this.userPassword)
        .then(function () {
          window.alert("You are already register, please Sign in");
          console.log("cuenta creada");

        })
    },
    loginEmail: function () {
      firebase.auth().signInWithEmailAndPassword(this.userEmail, this.userPassword)
        .then(function (result) {
          console.log("cuenta login");
        })
    },

    signOut: function () {
      firebase.auth().signOut().then(function () {
        window.location.reload();
        console.log('Signed Out');
      }, function (error) {
        console.error('Sign Out Error', error);
      });
    },
    addPost: function () {
      this.db.ref(app.gameChat.nombre).push({
        email: this.userEmail,
        name: this.userName,
        mensaje: this.msgText
      });
    }

  }

});

$(" .tab-bar a").bind('click', function (e) {
  e.preventDefault();
  var nextPage = $(e.target.hash);
  $("#pages .current").removeClass("current");
  nextPage.addClass("current");

});




var signInGoogle = document.getElementById('sign-in-google');
var registerButton = document.getElementById("register-button");
var signInButton = document.getElementById("sign-in-button");
var signOutButton = document.getElementById("sign-out-button");
var allGames = document.getElementById ("upcomingGames")
var pageRegister = document.getElementById("register");
var chatDeMensajes = document.getElementById("chatMessenger");
var botonSignOut = document.getElementById("link3");


function onAuthStateChanged(user) {

  if (user != null) {
    var mailDelUsuario = firebase.auth().currentUser.email;
    var nameDelUsuario = firebase.auth().currentUser.displayName;
    app.userEmail = mailDelUsuario;
    app.userName = nameDelUsuario;
    pageRegister.style.display = "none";
    allGames.style.display="block";
    botonSignOut.style.display="block";



  } else {
    // Set currentUID to null.

    // Display the splash page where you can sign-in.

    allGames.style.display = 'none';
    chatDeMensajes.style.display = "none";

  }

};

function mostrarChat (chat) {
      $("chat").show;
    }

function showDiv(div) {
  var divShowed = document.getElementById(div);
  divShowed.style.display = "block";
  divShowed.style.zIndex = "100000";
}

function hideDiv(div) {
  var divHided = document.getElementById(div);
  divHided.style.visibility = "hidden";
}


// Listen for auth state changes
firebase.auth().onAuthStateChanged(onAuthStateChanged);


//DATABASE task4-----------------------------------------------------------------------------------------------------------------------------
