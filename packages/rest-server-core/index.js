/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/
'use strict';

const RESTClient = require('./src/client/RESTClient');
const RESTServer = require('./src/server/RESTServer');
const EventEmittingRESTServer = require('./src/server/EventEmittingRESTServer');

module.exports = {
	RESTClient,
	RESTServer,
	EventEmittingRESTServer
};
