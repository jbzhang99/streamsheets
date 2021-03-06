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
const AuthError = require('./AuthError');
const ErrorCodes = require('./ErrorCodes');
const InputError = require('./InputError');
const InternalError = require('./InternalError');
const MongoError = require('./MongoError');

module.exports = {
	AuthError,
	ErrorCodes,
	InputError,
	InternalError,
	MongoError
};
