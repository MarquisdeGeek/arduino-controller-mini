'use strict';

var gVars = {};

function SGXPrepare_OS() {
  sgxskeleton.PrepareLoadingPage();

  new sgx.main.System();

  sgx.graphics.Engine.create(960,680);  // the size of the draw area we (as programmers) will use

  sgx.main.System.writePage();
  sgx.main.System.initialize();  // optionally pass the 'loading_screen' ID here, to hide the contents once loaded

  // Application-specific initialisation
  var socket = io();
  gVars.arduino = new arduino({board:'uno', socketio:socket});//TODO: pass in socket???
  gVars.arduino.onConnectAsClient(socket);
}

function SGXinit() {
}

function SGXstart() {
}

function SGXupdate(telaps) {
}

function SGXdraw() {
}
