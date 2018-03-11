var __wpo = {
  "assets": {
    "main": [
      "/CNAME",
      "/0-d6233112f6a628b8ca9a.js",
      "/1-d6233112f6a628b8ca9a.js",
      "/2-d6233112f6a628b8ca9a.js",
      "/main-d6233112f6a628b8ca9a.js",
      "/style.css",
      "/",
      "/manifest.1b1dbd999e4bcbef7f7973ec30abda41.json",
      "/icon_1024x1024.5ed3b8c85a64bceb2ae53e00ec676e09.png",
      "/icon_180x180.a43b8e3969c408a670c80aaafe06052a.png",
      "/icon_167x167.77a6c4df73b2468c531e45f1bd91e83c.png",
      "/icon_152x152.929845cf1f6c5e1243e6b61171504b69.png",
      "/icon_120x120.fd5378da8d97d35579e59b338dd2dbb8.png",
      "/icon_512x512.b9441264786a0f25d4d36f412e7c1eb0.png",
      "/icon_384x384.4836e1db99096f81fbd7246a202a2de7.png",
      "/icon_256x256.26140ca6cad1b51dc0d1d985655bdd35.png",
      "/icon_192x192.edb9bd46d8280f3746623e64bcfd0166.png",
      "/icon_128x128.38937ba6a92604bceefc68c56193fa6f.png",
      "/icon_96x96.2640b55327c7534ef91b9d8ac7a59986.png"
    ],
    "additional": [],
    "optional": []
  },
  "externals": [],
  "hashesMap": {
    "9117551d6beaab1ada27ec39629c8bac40765576": "/CNAME",
    "7ff12221cdad7f8b403c373752e0480844a5e0f6": "/0-d6233112f6a628b8ca9a.js",
    "d959dd44353a913a96719e970c041d18bcadd1d6": "/1-d6233112f6a628b8ca9a.js",
    "d18629721912bb9ba98684e2b5337ade61753247": "/2-d6233112f6a628b8ca9a.js",
    "6c98ba154860f0e60ae69c76d90f656654feca37": "/main-d6233112f6a628b8ca9a.js",
    "9c3a09ef9e41e5478309208153236e8a7f53fc49": "/style.css",
    "ae553f7a66b21b57f3bdee524c219b2b405a18b1": "/",
    "c46181780d800f08c838d6b5226fc257ec49957a": "/manifest.1b1dbd999e4bcbef7f7973ec30abda41.json",
    "56ba19f79b389bd9c58fb9470e28d3ff92c5aa13": "/icon_1024x1024.5ed3b8c85a64bceb2ae53e00ec676e09.png",
    "29ef3b4a0fef9eb7946f412210b3029098d925b0": "/icon_180x180.a43b8e3969c408a670c80aaafe06052a.png",
    "4707d8e5f5117a05d28587f1e3fb47f0e97feb56": "/icon_167x167.77a6c4df73b2468c531e45f1bd91e83c.png",
    "167afd126e23f8eb9379283ce78b0fc46c7bbe9e": "/icon_152x152.929845cf1f6c5e1243e6b61171504b69.png",
    "64305e560f4301d022e053b711da205dc758d6f3": "/icon_120x120.fd5378da8d97d35579e59b338dd2dbb8.png",
    "893f0a00c5bed2e7386b1dbe61b653cc1ba448d1": "/icon_512x512.b9441264786a0f25d4d36f412e7c1eb0.png",
    "ddd1b23d5785b6fcdf68f5797da0e3ec56598e99": "/icon_384x384.4836e1db99096f81fbd7246a202a2de7.png",
    "b76758b118245392472b22c2e399e8b3f490f39b": "/icon_256x256.26140ca6cad1b51dc0d1d985655bdd35.png",
    "1d408fadf7e525972c5e6d6ba0231ef60e83417c": "/icon_192x192.edb9bd46d8280f3746623e64bcfd0166.png",
    "5cbb61a6bd7087ac71a3af3d969cc9140c863036": "/icon_128x128.38937ba6a92604bceefc68c56193fa6f.png",
    "36b3e1b8864be3ed59dc5830a26d3e7d2caf47ce": "/icon_96x96.2640b55327c7534ef91b9d8ac7a59986.png"
  },
  "strategy": "changed",
  "responseStrategy": "cache-first",
  "version": "2018-3-11 16:31:23",
  "name": "webpack-offline",
  "pluginVersion": "4.9.0",
  "relativePaths": false
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "077b3b17b1b39a2dbc1b"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (!installedModules[request].parents.includes(moduleId))
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (!me.children.includes(request)) me.children.push(request);
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle")
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{
/******/ 				// eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.includes(parentId)) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (!a.includes(item)) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.includes(cb)) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  var waitUntil = ExtendableEvent.prototype.waitUntil;\n  var respondWith = FetchEvent.prototype.respondWith;\n  var promisesMap = new WeakMap();\n\n  ExtendableEvent.prototype.waitUntil = function (promise) {\n    var extendableEvent = this;\n    var promises = promisesMap.get(extendableEvent);\n\n    if (promises) {\n      promises.push(Promise.resolve(promise));\n      return;\n    }\n\n    promises = [Promise.resolve(promise)];\n    promisesMap.set(extendableEvent, promises);\n\n    // call original method\n    return waitUntil.call(extendableEvent, Promise.resolve().then(function processPromises() {\n      var len = promises.length;\n\n      // wait for all to settle\n      return Promise.all(promises.map(function (p) {\n        return p[\"catch\"](function () {});\n      })).then(function () {\n        // have new items been added? If so, wait again\n        if (promises.length != len) return processPromises();\n        // we're done!\n        promisesMap[\"delete\"](extendableEvent);\n        // reject if one of the promises rejected\n        return Promise.all(promises);\n      });\n    }));\n  };\n\n  FetchEvent.prototype.respondWith = function (promise) {\n    this.waitUntil(promise);\n    return respondWith.call(this, promise);\n  };\n})();;\n        'use strict';\n\nif (typeof DEBUG === 'undefined') {\n  var DEBUG = false;\n}\n\nfunction WebpackServiceWorker(params, helpers) {\n  var loaders = helpers.loaders;\n  var cacheMaps = helpers.cacheMaps;\n  // navigationPreload: true, { map: (URL) => URL, test: (URL) => boolean }\n  var navigationPreload = helpers.navigationPreload;\n\n  // (update)strategy: changed, all\n  var strategy = params.strategy;\n  // responseStrategy: cache-first, network-first\n  var responseStrategy = params.responseStrategy;\n\n  var assets = params.assets;\n  var loadersMap = params.loaders || {};\n\n  var hashesMap = params.hashesMap;\n  var externals = params.externals;\n\n  var CACHE_PREFIX = params.name;\n  var CACHE_TAG = params.version;\n  var CACHE_NAME = CACHE_PREFIX + ':' + CACHE_TAG;\n\n  var PRELOAD_CACHE_NAME = CACHE_PREFIX + '$preload';\n  var STORED_DATA_KEY = '__offline_webpack__data';\n\n  mapAssets();\n\n  var allAssets = [].concat(assets.main, assets.additional, assets.optional);\n\n  // Deprecated {\n  var navigateFallbackURL = params.navigateFallbackURL;\n  var navigateFallbackForRedirects = params.navigateFallbackForRedirects;\n  // }\n\n  self.addEventListener('install', function (event) {\n    console.log('[SW]:', 'Install event');\n\n    var installing = undefined;\n\n    if (strategy === 'changed') {\n      installing = cacheChanged('main');\n    } else {\n      installing = cacheAssets('main');\n    }\n\n    event.waitUntil(installing);\n  });\n\n  self.addEventListener('activate', function (event) {\n    console.log('[SW]:', 'Activate event');\n\n    var activation = cacheAdditional();\n\n    // Delete all assets which name starts with CACHE_PREFIX and\n    // is not current cache (CACHE_NAME)\n    activation = activation.then(storeCacheData);\n    activation = activation.then(deleteObsolete);\n    activation = activation.then(function () {\n      if (self.clients && self.clients.claim) {\n        return self.clients.claim();\n      }\n    });\n\n    if (navigationPreload && self.registration.navigationPreload) {\n      activation = Promise.all([activation, self.registration.navigationPreload.enable()]);\n    }\n\n    event.waitUntil(activation);\n  });\n\n  function cacheAdditional() {\n    if (!assets.additional.length) {\n      return Promise.resolve();\n    }\n\n    if (DEBUG) {\n      console.log('[SW]:', 'Caching additional');\n    }\n\n    var operation = undefined;\n\n    if (strategy === 'changed') {\n      operation = cacheChanged('additional');\n    } else {\n      operation = cacheAssets('additional');\n    }\n\n    // Ignore fail of `additional` cache section\n    return operation['catch'](function (e) {\n      console.error('[SW]:', 'Cache section `additional` failed to load');\n    });\n  }\n\n  function cacheAssets(section) {\n    var batch = assets[section];\n\n    return caches.open(CACHE_NAME).then(function (cache) {\n      return addAllNormalized(cache, batch, {\n        bust: params.version,\n        request: params.prefetchRequest\n      });\n    }).then(function () {\n      logGroup('Cached assets: ' + section, batch);\n    })['catch'](function (e) {\n      console.error(e);\n      throw e;\n    });\n  }\n\n  function cacheChanged(section) {\n    return getLastCache().then(function (args) {\n      if (!args) {\n        return cacheAssets(section);\n      }\n\n      var lastCache = args[0];\n      var lastKeys = args[1];\n      var lastData = args[2];\n\n      var lastMap = lastData.hashmap;\n      var lastVersion = lastData.version;\n\n      if (!lastData.hashmap || lastVersion === params.version) {\n        return cacheAssets(section);\n      }\n\n      var lastHashedAssets = Object.keys(lastMap).map(function (hash) {\n        return lastMap[hash];\n      });\n\n      var lastUrls = lastKeys.map(function (req) {\n        var url = new URL(req.url);\n        url.search = '';\n        url.hash = '';\n\n        return url.toString();\n      });\n\n      var sectionAssets = assets[section];\n      var moved = [];\n      var changed = sectionAssets.filter(function (url) {\n        if (lastUrls.indexOf(url) === -1 || lastHashedAssets.indexOf(url) === -1) {\n          return true;\n        }\n\n        return false;\n      });\n\n      Object.keys(hashesMap).forEach(function (hash) {\n        var asset = hashesMap[hash];\n\n        // Return if not in sectionAssets or in changed or moved array\n        if (sectionAssets.indexOf(asset) === -1 || changed.indexOf(asset) !== -1 || moved.indexOf(asset) !== -1) return;\n\n        var lastAsset = lastMap[hash];\n\n        if (lastAsset && lastUrls.indexOf(lastAsset) !== -1) {\n          moved.push([lastAsset, asset]);\n        } else {\n          changed.push(asset);\n        }\n      });\n\n      logGroup('Changed assets: ' + section, changed);\n      logGroup('Moved assets: ' + section, moved);\n\n      var movedResponses = Promise.all(moved.map(function (pair) {\n        return lastCache.match(pair[0]).then(function (response) {\n          return [pair[1], response];\n        });\n      }));\n\n      return caches.open(CACHE_NAME).then(function (cache) {\n        var move = movedResponses.then(function (responses) {\n          return Promise.all(responses.map(function (pair) {\n            return cache.put(pair[0], pair[1]);\n          }));\n        });\n\n        return Promise.all([move, addAllNormalized(cache, changed, {\n          bust: params.version,\n          request: params.prefetchRequest\n        })]);\n      });\n    });\n  }\n\n  function deleteObsolete() {\n    return caches.keys().then(function (keys) {\n      var all = keys.map(function (key) {\n        if (key.indexOf(CACHE_PREFIX) !== 0 || key.indexOf(CACHE_NAME) === 0) return;\n\n        console.log('[SW]:', 'Delete cache:', key);\n        return caches['delete'](key);\n      });\n\n      return Promise.all(all);\n    });\n  }\n\n  function getLastCache() {\n    return caches.keys().then(function (keys) {\n      var index = keys.length;\n      var key = undefined;\n\n      while (index--) {\n        key = keys[index];\n\n        if (key.indexOf(CACHE_PREFIX) === 0) {\n          break;\n        }\n      }\n\n      if (!key) return;\n\n      var cache = undefined;\n\n      return caches.open(key).then(function (_cache) {\n        cache = _cache;\n        return _cache.match(new URL(STORED_DATA_KEY, location).toString());\n      }).then(function (response) {\n        if (!response) return;\n\n        return Promise.all([cache, cache.keys(), response.json()]);\n      });\n    });\n  }\n\n  function storeCacheData() {\n    return caches.open(CACHE_NAME).then(function (cache) {\n      var data = new Response(JSON.stringify({\n        version: params.version,\n        hashmap: hashesMap\n      }));\n\n      return cache.put(new URL(STORED_DATA_KEY, location).toString(), data);\n    });\n  }\n\n  self.addEventListener('fetch', function (event) {\n    var url = new URL(event.request.url);\n    url.hash = '';\n\n    var urlString = url.toString();\n\n    // Not external, so search part of the URL should be stripped,\n    // if it's external URL, the search part should be kept\n    if (externals.indexOf(urlString) === -1) {\n      url.search = '';\n      urlString = url.toString();\n    }\n\n    // Handle only GET requests\n    var isGET = event.request.method === 'GET';\n    var assetMatches = allAssets.indexOf(urlString) !== -1;\n    var cacheUrl = urlString;\n\n    if (!assetMatches) {\n      var cacheRewrite = matchCacheMap(event.request);\n\n      if (cacheRewrite) {\n        cacheUrl = cacheRewrite;\n        assetMatches = true;\n      }\n    }\n\n    if (!assetMatches && isGET) {\n      // If isn't a cached asset and is a navigation request,\n      // perform network request and fallback to navigateFallbackURL if available.\n      //\n      // Requesting with fetchWithPreload().\n      // Preload is used only if navigationPreload is enabled and\n      // navigationPreload mapping is not used.\n      if (navigateFallbackURL && isNavigateRequest(event.request)) {\n        event.respondWith(handleNavigateFallback(fetchWithPreload(event)));\n\n        return;\n      }\n\n      if (navigationPreload === true) {\n        event.respondWith(fetchWithPreload(event));\n        return;\n      }\n\n      // Something else, positive, but not `true`\n      if (navigationPreload) {\n        var preloadedResponse = retrivePreloadedResponse(event);\n\n        if (preloadedResponse) {\n          event.respondWith(preloadedResponse);\n          return;\n        }\n      }\n\n      // Logic exists here if no cache match, or no preload\n      return;\n    }\n\n    if (!assetMatches || !isGET) {\n      // Fix for https://twitter.com/wanderview/status/696819243262873600\n      if (url.origin !== location.origin && navigator.userAgent.indexOf('Firefox/44.') !== -1) {\n        event.respondWith(fetch(event.request));\n      }\n\n      // Logic exists here if no cache match\n      return;\n    }\n\n    // Cache handling/storing/fetching starts here\n\n    var resource = undefined;\n\n    if (responseStrategy === 'network-first') {\n      resource = networkFirstResponse(event, urlString, cacheUrl);\n    }\n    // 'cache-first' otherwise\n    // (responseStrategy has been validated before)\n    else {\n        resource = cacheFirstResponse(event, urlString, cacheUrl);\n      }\n\n    if (navigateFallbackURL && isNavigateRequest(event.request)) {\n      resource = handleNavigateFallback(resource);\n    }\n\n    event.respondWith(resource);\n  });\n\n  self.addEventListener('message', function (e) {\n    var data = e.data;\n    if (!data) return;\n\n    switch (data.action) {\n      case 'skipWaiting':\n        {\n          if (self.skipWaiting) self.skipWaiting();\n        }break;\n    }\n  });\n\n  function cacheFirstResponse(event, urlString, cacheUrl) {\n    handleNavigationPreload(event);\n\n    return cachesMatch(cacheUrl, CACHE_NAME).then(function (response) {\n      if (response) {\n        if (DEBUG) {\n          console.log('[SW]:', 'URL [' + cacheUrl + '](' + urlString + ') from cache');\n        }\n\n        return response;\n      }\n\n      // Load and cache known assets\n      var fetching = fetch(event.request).then(function (response) {\n        if (!response.ok) {\n          if (DEBUG) {\n            console.log('[SW]:', 'URL [' + urlString + '] wrong response: [' + response.status + '] ' + response.type);\n          }\n\n          return response;\n        }\n\n        if (DEBUG) {\n          console.log('[SW]:', 'URL [' + urlString + '] from network');\n        }\n\n        if (cacheUrl === urlString) {\n          (function () {\n            var responseClone = response.clone();\n            var storing = caches.open(CACHE_NAME).then(function (cache) {\n              return cache.put(urlString, responseClone);\n            }).then(function () {\n              console.log('[SW]:', 'Cache asset: ' + urlString);\n            });\n\n            event.waitUntil(storing);\n          })();\n        }\n\n        return response;\n      });\n\n      return fetching;\n    });\n  }\n\n  function networkFirstResponse(event, urlString, cacheUrl) {\n    return fetchWithPreload(event).then(function (response) {\n      if (response.ok) {\n        if (DEBUG) {\n          console.log('[SW]:', 'URL [' + urlString + '] from network');\n        }\n\n        return response;\n      }\n\n      // Throw to reach the code in the catch below\n      throw new Error('Response is not ok');\n    })\n    // This needs to be in a catch() and not just in the then() above\n    // cause if your network is down, the fetch() will throw\n    ['catch'](function () {\n      if (DEBUG) {\n        console.log('[SW]:', 'URL [' + urlString + '] from cache if possible');\n      }\n\n      return cachesMatch(cacheUrl, CACHE_NAME);\n    });\n  }\n\n  function handleNavigationPreload(event) {\n    if (navigationPreload && typeof navigationPreload.map === 'function' &&\n    // Use request.mode === 'navigate' instead of isNavigateRequest\n    // because everything what supports navigationPreload supports\n    // 'navigate' request.mode\n    event.preloadResponse && event.request.mode === 'navigate') {\n      var mapped = navigationPreload.map(new URL(event.request.url), event.request);\n\n      if (mapped) {\n        storePreloadedResponse(mapped, event);\n      }\n    }\n  }\n\n  // Temporary in-memory store for faster access\n  var navigationPreloadStore = new Map();\n\n  function storePreloadedResponse(_url, event) {\n    var url = new URL(_url, location);\n    var preloadResponsePromise = event.preloadResponse;\n\n    navigationPreloadStore.set(preloadResponsePromise, {\n      url: url,\n      response: preloadResponsePromise\n    });\n\n    var isSamePreload = function isSamePreload() {\n      return navigationPreloadStore.has(preloadResponsePromise);\n    };\n\n    var storing = preloadResponsePromise.then(function (res) {\n      // Return if preload isn't enabled or hasn't happened\n      if (!res) return;\n\n      // If navigationPreloadStore already consumed\n      // or navigationPreloadStore already contains another preload,\n      // then do not store anything and return\n      if (!isSamePreload()) {\n        return;\n      }\n\n      var clone = res.clone();\n\n      // Storing the preload response for later consume (hasn't yet been consumed)\n      return caches.open(PRELOAD_CACHE_NAME).then(function (cache) {\n        if (!isSamePreload()) return;\n\n        return cache.put(url, clone).then(function () {\n          if (!isSamePreload()) {\n            return caches.open(PRELOAD_CACHE_NAME).then(function (cache) {\n              return cache['delete'](url);\n            });\n          }\n        });\n      });\n    });\n\n    event.waitUntil(storing);\n  }\n\n  function retriveInMemoryPreloadedResponse(url) {\n    if (!navigationPreloadStore) {\n      return;\n    }\n\n    var foundResponse = undefined;\n    var foundKey = undefined;\n\n    navigationPreloadStore.forEach(function (store, key) {\n      if (store.url.href === url.href) {\n        foundResponse = store.response;\n        foundKey = key;\n      }\n    });\n\n    if (foundResponse) {\n      navigationPreloadStore['delete'](foundKey);\n      return foundResponse;\n    }\n  }\n\n  function retrivePreloadedResponse(event) {\n    var url = new URL(event.request.url);\n\n    if (self.registration.navigationPreload && navigationPreload && navigationPreload.test && navigationPreload.test(url, event.request)) {} else {\n      return;\n    }\n\n    var fromMemory = retriveInMemoryPreloadedResponse(url);\n    var request = event.request;\n\n    if (fromMemory) {\n      event.waitUntil(caches.open(PRELOAD_CACHE_NAME).then(function (cache) {\n        return cache['delete'](request);\n      }));\n\n      return fromMemory;\n    }\n\n    return cachesMatch(request, PRELOAD_CACHE_NAME).then(function (response) {\n      if (response) {\n        event.waitUntil(caches.open(PRELOAD_CACHE_NAME).then(function (cache) {\n          return cache['delete'](request);\n        }));\n      }\n\n      return response || fetch(event.request);\n    });\n  }\n\n  function handleNavigateFallback(fetching) {\n    return fetching['catch'](function () {}).then(function (response) {\n      var isOk = response && response.ok;\n      var isRedirect = response && response.type === 'opaqueredirect';\n\n      if (isOk || isRedirect && !navigateFallbackForRedirects) {\n        return response;\n      }\n\n      if (DEBUG) {\n        console.log('[SW]:', 'Loading navigation fallback [' + navigateFallbackURL + '] from cache');\n      }\n\n      return cachesMatch(navigateFallbackURL, CACHE_NAME);\n    });\n  }\n\n  function mapAssets() {\n    Object.keys(assets).forEach(function (key) {\n      assets[key] = assets[key].map(function (path) {\n        var url = new URL(path, location);\n\n        url.hash = '';\n\n        if (externals.indexOf(path) === -1) {\n          url.search = '';\n        }\n\n        return url.toString();\n      });\n    });\n\n    Object.keys(loadersMap).forEach(function (key) {\n      loadersMap[key] = loadersMap[key].map(function (path) {\n        var url = new URL(path, location);\n\n        url.hash = '';\n\n        if (externals.indexOf(path) === -1) {\n          url.search = '';\n        }\n\n        return url.toString();\n      });\n    });\n\n    hashesMap = Object.keys(hashesMap).reduce(function (result, hash) {\n      var url = new URL(hashesMap[hash], location);\n      url.search = '';\n      url.hash = '';\n\n      result[hash] = url.toString();\n      return result;\n    }, {});\n\n    externals = externals.map(function (path) {\n      var url = new URL(path, location);\n      url.hash = '';\n\n      return url.toString();\n    });\n  }\n\n  function addAllNormalized(cache, requests, options) {\n    var allowLoaders = options.allowLoaders !== false;\n    var bustValue = options && options.bust;\n    var requestInit = options.request || {\n      credentials: 'omit',\n      mode: 'cors'\n    };\n\n    return Promise.all(requests.map(function (request) {\n      if (bustValue) {\n        request = applyCacheBust(request, bustValue);\n      }\n\n      return fetch(request, requestInit).then(fixRedirectedResponse);\n    })).then(function (responses) {\n      if (responses.some(function (response) {\n        return !response.ok;\n      })) {\n        return Promise.reject(new Error('Wrong response status'));\n      }\n\n      var extracted = [];\n      var addAll = responses.map(function (response, i) {\n        if (allowLoaders) {\n          extracted.push(extractAssetsWithLoaders(requests[i], response));\n        }\n\n        return cache.put(requests[i], response);\n      });\n\n      if (extracted.length) {\n        (function () {\n          var newOptions = copyObject(options);\n          newOptions.allowLoaders = false;\n\n          var waitAll = addAll;\n\n          addAll = Promise.all(extracted).then(function (all) {\n            var extractedRequests = [].concat.apply([], all);\n\n            if (requests.length) {\n              waitAll = waitAll.concat(addAllNormalized(cache, extractedRequests, newOptions));\n            }\n\n            return Promise.all(waitAll);\n          });\n        })();\n      } else {\n        addAll = Promise.all(addAll);\n      }\n\n      return addAll;\n    });\n  }\n\n  function extractAssetsWithLoaders(request, response) {\n    var all = Object.keys(loadersMap).map(function (key) {\n      var loader = loadersMap[key];\n\n      if (loader.indexOf(request) !== -1 && loaders[key]) {\n        return loaders[key](response.clone());\n      }\n    }).filter(function (a) {\n      return !!a;\n    });\n\n    return Promise.all(all).then(function (all) {\n      return [].concat.apply([], all);\n    });\n  }\n\n  function matchCacheMap(request) {\n    var urlString = request.url;\n    var url = new URL(urlString);\n\n    var requestType = undefined;\n\n    if (isNavigateRequest(request)) {\n      requestType = 'navigate';\n    } else if (url.origin === location.origin) {\n      requestType = 'same-origin';\n    } else {\n      requestType = 'cross-origin';\n    }\n\n    for (var i = 0; i < cacheMaps.length; i++) {\n      var map = cacheMaps[i];\n\n      if (!map) continue;\n      if (map.requestTypes && map.requestTypes.indexOf(requestType) === -1) {\n        continue;\n      }\n\n      var newString = undefined;\n\n      if (typeof map.match === 'function') {\n        newString = map.match(url, request);\n      } else {\n        newString = urlString.replace(map.match, map.to);\n      }\n\n      if (newString && newString !== urlString) {\n        return newString;\n      }\n    }\n  }\n\n  function fetchWithPreload(event) {\n    if (!event.preloadResponse || navigationPreload !== true) {\n      return fetch(event.request);\n    }\n\n    return event.preloadResponse.then(function (response) {\n      return response || fetch(event.request);\n    });\n  }\n}\n\nfunction cachesMatch(request, cacheName) {\n  return caches.match(request, {\n    cacheName: cacheName\n  }).then(function (response) {\n    if (isNotRedirectedResponse()) {\n      return response;\n    }\n\n    // Fix already cached redirected responses\n    return fixRedirectedResponse(response).then(function (fixedResponse) {\n      return caches.open(cacheName).then(function (cache) {\n        return cache.put(request, fixedResponse);\n      }).then(function () {\n        return fixedResponse;\n      });\n    });\n  })\n  // Return void if error happened (cache not found)\n  ['catch'](function () {});\n}\n\nfunction applyCacheBust(asset, key) {\n  var hasQuery = asset.indexOf('?') !== -1;\n  return asset + (hasQuery ? '&' : '?') + '__uncache=' + encodeURIComponent(key);\n}\n\nfunction isNavigateRequest(request) {\n  return request.mode === 'navigate' || request.headers.get('Upgrade-Insecure-Requests') || (request.headers.get('Accept') || '').indexOf('text/html') !== -1;\n}\n\nfunction isNotRedirectedResponse(response) {\n  return !response || !response.redirected || !response.ok || response.type === 'opaqueredirect';\n}\n\n// Based on https://github.com/GoogleChrome/sw-precache/pull/241/files#diff-3ee9060dc7a312c6a822cac63a8c630bR85\nfunction fixRedirectedResponse(response) {\n  if (isNotRedirectedResponse(response)) {\n    return Promise.resolve(response);\n  }\n\n  var body = 'body' in response ? Promise.resolve(response.body) : response.blob();\n\n  return body.then(function (data) {\n    return new Response(data, {\n      headers: response.headers,\n      status: response.status\n    });\n  });\n}\n\nfunction copyObject(original) {\n  return Object.keys(original).reduce(function (result, key) {\n    result[key] = original[key];\n    return result;\n  }, {});\n}\n\nfunction logGroup(title, assets) {\n  console.groupCollapsed('[SW]:', title);\n\n  assets.forEach(function (asset) {\n    console.log('Asset:', asset);\n  });\n\n  console.groupEnd();\n}\n        WebpackServiceWorker(__wpo, {\nloaders: {},\ncacheMaps: [\n      {\n      match: /.*/,\n      to: \"/\",\n      requestTypes: [\"navigate\"],\n    }\n    ],\nnavigationPreload: false,\n});\n        module.exports = __webpack_require__(1)\n      //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvb2ZmbGluZS1wbHVnaW4vdHBscy9lbXB0eS1lbnRyeS5qcz85YTBjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgd2FpdFVudGlsID0gRXh0ZW5kYWJsZUV2ZW50LnByb3RvdHlwZS53YWl0VW50aWw7XG4gIHZhciByZXNwb25kV2l0aCA9IEZldGNoRXZlbnQucHJvdG90eXBlLnJlc3BvbmRXaXRoO1xuICB2YXIgcHJvbWlzZXNNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG4gIEV4dGVuZGFibGVFdmVudC5wcm90b3R5cGUud2FpdFVudGlsID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICB2YXIgZXh0ZW5kYWJsZUV2ZW50ID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZXMgPSBwcm9taXNlc01hcC5nZXQoZXh0ZW5kYWJsZUV2ZW50KTtcblxuICAgIGlmIChwcm9taXNlcykge1xuICAgICAgcHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUocHJvbWlzZSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb21pc2VzID0gW1Byb21pc2UucmVzb2x2ZShwcm9taXNlKV07XG4gICAgcHJvbWlzZXNNYXAuc2V0KGV4dGVuZGFibGVFdmVudCwgcHJvbWlzZXMpO1xuXG4gICAgLy8gY2FsbCBvcmlnaW5hbCBtZXRob2RcbiAgICByZXR1cm4gd2FpdFVudGlsLmNhbGwoZXh0ZW5kYWJsZUV2ZW50LCBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uIHByb2Nlc3NQcm9taXNlcygpIHtcbiAgICAgIHZhciBsZW4gPSBwcm9taXNlcy5sZW5ndGg7XG5cbiAgICAgIC8vIHdhaXQgZm9yIGFsbCB0byBzZXR0bGVcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIHBbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICB9KSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGhhdmUgbmV3IGl0ZW1zIGJlZW4gYWRkZWQ/IElmIHNvLCB3YWl0IGFnYWluXG4gICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggIT0gbGVuKSByZXR1cm4gcHJvY2Vzc1Byb21pc2VzKCk7XG4gICAgICAgIC8vIHdlJ3JlIGRvbmUhXG4gICAgICAgIHByb21pc2VzTWFwW1wiZGVsZXRlXCJdKGV4dGVuZGFibGVFdmVudCk7XG4gICAgICAgIC8vIHJlamVjdCBpZiBvbmUgb2YgdGhlIHByb21pc2VzIHJlamVjdGVkXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICB9KTtcbiAgICB9KSk7XG4gIH07XG5cbiAgRmV0Y2hFdmVudC5wcm90b3R5cGUucmVzcG9uZFdpdGggPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgIHRoaXMud2FpdFVudGlsKHByb21pc2UpO1xuICAgIHJldHVybiByZXNwb25kV2l0aC5jYWxsKHRoaXMsIHByb21pc2UpO1xuICB9O1xufSkoKTs7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuaWYgKHR5cGVvZiBERUJVRyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIERFQlVHID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIFdlYnBhY2tTZXJ2aWNlV29ya2VyKHBhcmFtcywgaGVscGVycykge1xuICB2YXIgbG9hZGVycyA9IGhlbHBlcnMubG9hZGVycztcbiAgdmFyIGNhY2hlTWFwcyA9IGhlbHBlcnMuY2FjaGVNYXBzO1xuICAvLyBuYXZpZ2F0aW9uUHJlbG9hZDogdHJ1ZSwgeyBtYXA6IChVUkwpID0+IFVSTCwgdGVzdDogKFVSTCkgPT4gYm9vbGVhbiB9XG4gIHZhciBuYXZpZ2F0aW9uUHJlbG9hZCA9IGhlbHBlcnMubmF2aWdhdGlvblByZWxvYWQ7XG5cbiAgLy8gKHVwZGF0ZSlzdHJhdGVneTogY2hhbmdlZCwgYWxsXG4gIHZhciBzdHJhdGVneSA9IHBhcmFtcy5zdHJhdGVneTtcbiAgLy8gcmVzcG9uc2VTdHJhdGVneTogY2FjaGUtZmlyc3QsIG5ldHdvcmstZmlyc3RcbiAgdmFyIHJlc3BvbnNlU3RyYXRlZ3kgPSBwYXJhbXMucmVzcG9uc2VTdHJhdGVneTtcblxuICB2YXIgYXNzZXRzID0gcGFyYW1zLmFzc2V0cztcbiAgdmFyIGxvYWRlcnNNYXAgPSBwYXJhbXMubG9hZGVycyB8fCB7fTtcblxuICB2YXIgaGFzaGVzTWFwID0gcGFyYW1zLmhhc2hlc01hcDtcbiAgdmFyIGV4dGVybmFscyA9IHBhcmFtcy5leHRlcm5hbHM7XG5cbiAgdmFyIENBQ0hFX1BSRUZJWCA9IHBhcmFtcy5uYW1lO1xuICB2YXIgQ0FDSEVfVEFHID0gcGFyYW1zLnZlcnNpb247XG4gIHZhciBDQUNIRV9OQU1FID0gQ0FDSEVfUFJFRklYICsgJzonICsgQ0FDSEVfVEFHO1xuXG4gIHZhciBQUkVMT0FEX0NBQ0hFX05BTUUgPSBDQUNIRV9QUkVGSVggKyAnJHByZWxvYWQnO1xuICB2YXIgU1RPUkVEX0RBVEFfS0VZID0gJ19fb2ZmbGluZV93ZWJwYWNrX19kYXRhJztcblxuICBtYXBBc3NldHMoKTtcblxuICB2YXIgYWxsQXNzZXRzID0gW10uY29uY2F0KGFzc2V0cy5tYWluLCBhc3NldHMuYWRkaXRpb25hbCwgYXNzZXRzLm9wdGlvbmFsKTtcblxuICAvLyBEZXByZWNhdGVkIHtcbiAgdmFyIG5hdmlnYXRlRmFsbGJhY2tVUkwgPSBwYXJhbXMubmF2aWdhdGVGYWxsYmFja1VSTDtcbiAgdmFyIG5hdmlnYXRlRmFsbGJhY2tGb3JSZWRpcmVjdHMgPSBwYXJhbXMubmF2aWdhdGVGYWxsYmFja0ZvclJlZGlyZWN0cztcbiAgLy8gfVxuXG4gIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdbU1ddOicsICdJbnN0YWxsIGV2ZW50Jyk7XG5cbiAgICB2YXIgaW5zdGFsbGluZyA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChzdHJhdGVneSA9PT0gJ2NoYW5nZWQnKSB7XG4gICAgICBpbnN0YWxsaW5nID0gY2FjaGVDaGFuZ2VkKCdtYWluJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbGxpbmcgPSBjYWNoZUFzc2V0cygnbWFpbicpO1xuICAgIH1cblxuICAgIGV2ZW50LndhaXRVbnRpbChpbnN0YWxsaW5nKTtcbiAgfSk7XG5cbiAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdbU1ddOicsICdBY3RpdmF0ZSBldmVudCcpO1xuXG4gICAgdmFyIGFjdGl2YXRpb24gPSBjYWNoZUFkZGl0aW9uYWwoKTtcblxuICAgIC8vIERlbGV0ZSBhbGwgYXNzZXRzIHdoaWNoIG5hbWUgc3RhcnRzIHdpdGggQ0FDSEVfUFJFRklYIGFuZFxuICAgIC8vIGlzIG5vdCBjdXJyZW50IGNhY2hlIChDQUNIRV9OQU1FKVxuICAgIGFjdGl2YXRpb24gPSBhY3RpdmF0aW9uLnRoZW4oc3RvcmVDYWNoZURhdGEpO1xuICAgIGFjdGl2YXRpb24gPSBhY3RpdmF0aW9uLnRoZW4oZGVsZXRlT2Jzb2xldGUpO1xuICAgIGFjdGl2YXRpb24gPSBhY3RpdmF0aW9uLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuY2xpZW50cyAmJiBzZWxmLmNsaWVudHMuY2xhaW0pIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuY2xpZW50cy5jbGFpbSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG5hdmlnYXRpb25QcmVsb2FkICYmIHNlbGYucmVnaXN0cmF0aW9uLm5hdmlnYXRpb25QcmVsb2FkKSB7XG4gICAgICBhY3RpdmF0aW9uID0gUHJvbWlzZS5hbGwoW2FjdGl2YXRpb24sIHNlbGYucmVnaXN0cmF0aW9uLm5hdmlnYXRpb25QcmVsb2FkLmVuYWJsZSgpXSk7XG4gICAgfVxuXG4gICAgZXZlbnQud2FpdFVudGlsKGFjdGl2YXRpb24pO1xuICB9KTtcblxuICBmdW5jdGlvbiBjYWNoZUFkZGl0aW9uYWwoKSB7XG4gICAgaWYgKCFhc3NldHMuYWRkaXRpb25hbC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoREVCVUcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbU1ddOicsICdDYWNoaW5nIGFkZGl0aW9uYWwnKTtcbiAgICB9XG5cbiAgICB2YXIgb3BlcmF0aW9uID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHN0cmF0ZWd5ID09PSAnY2hhbmdlZCcpIHtcbiAgICAgIG9wZXJhdGlvbiA9IGNhY2hlQ2hhbmdlZCgnYWRkaXRpb25hbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVyYXRpb24gPSBjYWNoZUFzc2V0cygnYWRkaXRpb25hbCcpO1xuICAgIH1cblxuICAgIC8vIElnbm9yZSBmYWlsIG9mIGBhZGRpdGlvbmFsYCBjYWNoZSBzZWN0aW9uXG4gICAgcmV0dXJuIG9wZXJhdGlvblsnY2F0Y2gnXShmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1NXXTonLCAnQ2FjaGUgc2VjdGlvbiBgYWRkaXRpb25hbGAgZmFpbGVkIHRvIGxvYWQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhY2hlQXNzZXRzKHNlY3Rpb24pIHtcbiAgICB2YXIgYmF0Y2ggPSBhc3NldHNbc2VjdGlvbl07XG5cbiAgICByZXR1cm4gY2FjaGVzLm9wZW4oQ0FDSEVfTkFNRSkudGhlbihmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgIHJldHVybiBhZGRBbGxOb3JtYWxpemVkKGNhY2hlLCBiYXRjaCwge1xuICAgICAgICBidXN0OiBwYXJhbXMudmVyc2lvbixcbiAgICAgICAgcmVxdWVzdDogcGFyYW1zLnByZWZldGNoUmVxdWVzdFxuICAgICAgfSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBsb2dHcm91cCgnQ2FjaGVkIGFzc2V0czogJyArIHNlY3Rpb24sIGJhdGNoKTtcbiAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIHRocm93IGU7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWNoZUNoYW5nZWQoc2VjdGlvbikge1xuICAgIHJldHVybiBnZXRMYXN0Q2FjaGUoKS50aGVuKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICBpZiAoIWFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlQXNzZXRzKHNlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFzdENhY2hlID0gYXJnc1swXTtcbiAgICAgIHZhciBsYXN0S2V5cyA9IGFyZ3NbMV07XG4gICAgICB2YXIgbGFzdERhdGEgPSBhcmdzWzJdO1xuXG4gICAgICB2YXIgbGFzdE1hcCA9IGxhc3REYXRhLmhhc2htYXA7XG4gICAgICB2YXIgbGFzdFZlcnNpb24gPSBsYXN0RGF0YS52ZXJzaW9uO1xuXG4gICAgICBpZiAoIWxhc3REYXRhLmhhc2htYXAgfHwgbGFzdFZlcnNpb24gPT09IHBhcmFtcy52ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiBjYWNoZUFzc2V0cyhzZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxhc3RIYXNoZWRBc3NldHMgPSBPYmplY3Qua2V5cyhsYXN0TWFwKS5tYXAoZnVuY3Rpb24gKGhhc2gpIHtcbiAgICAgICAgcmV0dXJuIGxhc3RNYXBbaGFzaF07XG4gICAgICB9KTtcblxuICAgICAgdmFyIGxhc3RVcmxzID0gbGFzdEtleXMubWFwKGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwocmVxLnVybCk7XG4gICAgICAgIHVybC5zZWFyY2ggPSAnJztcbiAgICAgICAgdXJsLmhhc2ggPSAnJztcblxuICAgICAgICByZXR1cm4gdXJsLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHNlY3Rpb25Bc3NldHMgPSBhc3NldHNbc2VjdGlvbl07XG4gICAgICB2YXIgbW92ZWQgPSBbXTtcbiAgICAgIHZhciBjaGFuZ2VkID0gc2VjdGlvbkFzc2V0cy5maWx0ZXIoZnVuY3Rpb24gKHVybCkge1xuICAgICAgICBpZiAobGFzdFVybHMuaW5kZXhPZih1cmwpID09PSAtMSB8fCBsYXN0SGFzaGVkQXNzZXRzLmluZGV4T2YodXJsKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICBPYmplY3Qua2V5cyhoYXNoZXNNYXApLmZvckVhY2goZnVuY3Rpb24gKGhhc2gpIHtcbiAgICAgICAgdmFyIGFzc2V0ID0gaGFzaGVzTWFwW2hhc2hdO1xuXG4gICAgICAgIC8vIFJldHVybiBpZiBub3QgaW4gc2VjdGlvbkFzc2V0cyBvciBpbiBjaGFuZ2VkIG9yIG1vdmVkIGFycmF5XG4gICAgICAgIGlmIChzZWN0aW9uQXNzZXRzLmluZGV4T2YoYXNzZXQpID09PSAtMSB8fCBjaGFuZ2VkLmluZGV4T2YoYXNzZXQpICE9PSAtMSB8fCBtb3ZlZC5pbmRleE9mKGFzc2V0KSAhPT0gLTEpIHJldHVybjtcblxuICAgICAgICB2YXIgbGFzdEFzc2V0ID0gbGFzdE1hcFtoYXNoXTtcblxuICAgICAgICBpZiAobGFzdEFzc2V0ICYmIGxhc3RVcmxzLmluZGV4T2YobGFzdEFzc2V0KSAhPT0gLTEpIHtcbiAgICAgICAgICBtb3ZlZC5wdXNoKFtsYXN0QXNzZXQsIGFzc2V0XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhbmdlZC5wdXNoKGFzc2V0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxvZ0dyb3VwKCdDaGFuZ2VkIGFzc2V0czogJyArIHNlY3Rpb24sIGNoYW5nZWQpO1xuICAgICAgbG9nR3JvdXAoJ01vdmVkIGFzc2V0czogJyArIHNlY3Rpb24sIG1vdmVkKTtcblxuICAgICAgdmFyIG1vdmVkUmVzcG9uc2VzID0gUHJvbWlzZS5hbGwobW92ZWQubWFwKGZ1bmN0aW9uIChwYWlyKSB7XG4gICAgICAgIHJldHVybiBsYXN0Q2FjaGUubWF0Y2gocGFpclswXSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gW3BhaXJbMV0sIHJlc3BvbnNlXTtcbiAgICAgICAgfSk7XG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBjYWNoZXMub3BlbihDQUNIRV9OQU1FKS50aGVuKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICB2YXIgbW92ZSA9IG1vdmVkUmVzcG9uc2VzLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlcykge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXNwb25zZXMubWFwKGZ1bmN0aW9uIChwYWlyKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUucHV0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFttb3ZlLCBhZGRBbGxOb3JtYWxpemVkKGNhY2hlLCBjaGFuZ2VkLCB7XG4gICAgICAgICAgYnVzdDogcGFyYW1zLnZlcnNpb24sXG4gICAgICAgICAgcmVxdWVzdDogcGFyYW1zLnByZWZldGNoUmVxdWVzdFxuICAgICAgICB9KV0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVPYnNvbGV0ZSgpIHtcbiAgICByZXR1cm4gY2FjaGVzLmtleXMoKS50aGVuKGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICB2YXIgYWxsID0ga2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YoQ0FDSEVfUFJFRklYKSAhPT0gMCB8fCBrZXkuaW5kZXhPZihDQUNIRV9OQU1FKSA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdbU1ddOicsICdEZWxldGUgY2FjaGU6Jywga2V5KTtcbiAgICAgICAgcmV0dXJuIGNhY2hlc1snZGVsZXRlJ10oa2V5KTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYWxsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExhc3RDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGVzLmtleXMoKS50aGVuKGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICB2YXIgaW5kZXggPSBrZXlzLmxlbmd0aDtcbiAgICAgIHZhciBrZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgIGtleSA9IGtleXNbaW5kZXhdO1xuXG4gICAgICAgIGlmIChrZXkuaW5kZXhPZihDQUNIRV9QUkVGSVgpID09PSAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFrZXkpIHJldHVybjtcblxuICAgICAgdmFyIGNhY2hlID0gdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gY2FjaGVzLm9wZW4oa2V5KS50aGVuKGZ1bmN0aW9uIChfY2FjaGUpIHtcbiAgICAgICAgY2FjaGUgPSBfY2FjaGU7XG4gICAgICAgIHJldHVybiBfY2FjaGUubWF0Y2gobmV3IFVSTChTVE9SRURfREFUQV9LRVksIGxvY2F0aW9uKS50b1N0cmluZygpKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2NhY2hlLCBjYWNoZS5rZXlzKCksIHJlc3BvbnNlLmpzb24oKV0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9yZUNhY2hlRGF0YSgpIHtcbiAgICByZXR1cm4gY2FjaGVzLm9wZW4oQ0FDSEVfTkFNRSkudGhlbihmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgIHZhciBkYXRhID0gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmVyc2lvbjogcGFyYW1zLnZlcnNpb24sXG4gICAgICAgIGhhc2htYXA6IGhhc2hlc01hcFxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gY2FjaGUucHV0KG5ldyBVUkwoU1RPUkVEX0RBVEFfS0VZLCBsb2NhdGlvbikudG9TdHJpbmcoKSwgZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuICAgIHVybC5oYXNoID0gJyc7XG5cbiAgICB2YXIgdXJsU3RyaW5nID0gdXJsLnRvU3RyaW5nKCk7XG5cbiAgICAvLyBOb3QgZXh0ZXJuYWwsIHNvIHNlYXJjaCBwYXJ0IG9mIHRoZSBVUkwgc2hvdWxkIGJlIHN0cmlwcGVkLFxuICAgIC8vIGlmIGl0J3MgZXh0ZXJuYWwgVVJMLCB0aGUgc2VhcmNoIHBhcnQgc2hvdWxkIGJlIGtlcHRcbiAgICBpZiAoZXh0ZXJuYWxzLmluZGV4T2YodXJsU3RyaW5nKSA9PT0gLTEpIHtcbiAgICAgIHVybC5zZWFyY2ggPSAnJztcbiAgICAgIHVybFN0cmluZyA9IHVybC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBvbmx5IEdFVCByZXF1ZXN0c1xuICAgIHZhciBpc0dFVCA9IGV2ZW50LnJlcXVlc3QubWV0aG9kID09PSAnR0VUJztcbiAgICB2YXIgYXNzZXRNYXRjaGVzID0gYWxsQXNzZXRzLmluZGV4T2YodXJsU3RyaW5nKSAhPT0gLTE7XG4gICAgdmFyIGNhY2hlVXJsID0gdXJsU3RyaW5nO1xuXG4gICAgaWYgKCFhc3NldE1hdGNoZXMpIHtcbiAgICAgIHZhciBjYWNoZVJld3JpdGUgPSBtYXRjaENhY2hlTWFwKGV2ZW50LnJlcXVlc3QpO1xuXG4gICAgICBpZiAoY2FjaGVSZXdyaXRlKSB7XG4gICAgICAgIGNhY2hlVXJsID0gY2FjaGVSZXdyaXRlO1xuICAgICAgICBhc3NldE1hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYXNzZXRNYXRjaGVzICYmIGlzR0VUKSB7XG4gICAgICAvLyBJZiBpc24ndCBhIGNhY2hlZCBhc3NldCBhbmQgaXMgYSBuYXZpZ2F0aW9uIHJlcXVlc3QsXG4gICAgICAvLyBwZXJmb3JtIG5ldHdvcmsgcmVxdWVzdCBhbmQgZmFsbGJhY2sgdG8gbmF2aWdhdGVGYWxsYmFja1VSTCBpZiBhdmFpbGFibGUuXG4gICAgICAvL1xuICAgICAgLy8gUmVxdWVzdGluZyB3aXRoIGZldGNoV2l0aFByZWxvYWQoKS5cbiAgICAgIC8vIFByZWxvYWQgaXMgdXNlZCBvbmx5IGlmIG5hdmlnYXRpb25QcmVsb2FkIGlzIGVuYWJsZWQgYW5kXG4gICAgICAvLyBuYXZpZ2F0aW9uUHJlbG9hZCBtYXBwaW5nIGlzIG5vdCB1c2VkLlxuICAgICAgaWYgKG5hdmlnYXRlRmFsbGJhY2tVUkwgJiYgaXNOYXZpZ2F0ZVJlcXVlc3QoZXZlbnQucmVxdWVzdCkpIHtcbiAgICAgICAgZXZlbnQucmVzcG9uZFdpdGgoaGFuZGxlTmF2aWdhdGVGYWxsYmFjayhmZXRjaFdpdGhQcmVsb2FkKGV2ZW50KSkpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hdmlnYXRpb25QcmVsb2FkID09PSB0cnVlKSB7XG4gICAgICAgIGV2ZW50LnJlc3BvbmRXaXRoKGZldGNoV2l0aFByZWxvYWQoZXZlbnQpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTb21ldGhpbmcgZWxzZSwgcG9zaXRpdmUsIGJ1dCBub3QgYHRydWVgXG4gICAgICBpZiAobmF2aWdhdGlvblByZWxvYWQpIHtcbiAgICAgICAgdmFyIHByZWxvYWRlZFJlc3BvbnNlID0gcmV0cml2ZVByZWxvYWRlZFJlc3BvbnNlKGV2ZW50KTtcblxuICAgICAgICBpZiAocHJlbG9hZGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICBldmVudC5yZXNwb25kV2l0aChwcmVsb2FkZWRSZXNwb25zZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIExvZ2ljIGV4aXN0cyBoZXJlIGlmIG5vIGNhY2hlIG1hdGNoLCBvciBubyBwcmVsb2FkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFhc3NldE1hdGNoZXMgfHwgIWlzR0VUKSB7XG4gICAgICAvLyBGaXggZm9yIGh0dHBzOi8vdHdpdHRlci5jb20vd2FuZGVydmlldy9zdGF0dXMvNjk2ODE5MjQzMjYyODczNjAwXG4gICAgICBpZiAodXJsLm9yaWdpbiAhPT0gbG9jYXRpb24ub3JpZ2luICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveC80NC4nKSAhPT0gLTEpIHtcbiAgICAgICAgZXZlbnQucmVzcG9uZFdpdGgoZmV0Y2goZXZlbnQucmVxdWVzdCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBMb2dpYyBleGlzdHMgaGVyZSBpZiBubyBjYWNoZSBtYXRjaFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENhY2hlIGhhbmRsaW5nL3N0b3JpbmcvZmV0Y2hpbmcgc3RhcnRzIGhlcmVcblxuICAgIHZhciByZXNvdXJjZSA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChyZXNwb25zZVN0cmF0ZWd5ID09PSAnbmV0d29yay1maXJzdCcpIHtcbiAgICAgIHJlc291cmNlID0gbmV0d29ya0ZpcnN0UmVzcG9uc2UoZXZlbnQsIHVybFN0cmluZywgY2FjaGVVcmwpO1xuICAgIH1cbiAgICAvLyAnY2FjaGUtZmlyc3QnIG90aGVyd2lzZVxuICAgIC8vIChyZXNwb25zZVN0cmF0ZWd5IGhhcyBiZWVuIHZhbGlkYXRlZCBiZWZvcmUpXG4gICAgZWxzZSB7XG4gICAgICAgIHJlc291cmNlID0gY2FjaGVGaXJzdFJlc3BvbnNlKGV2ZW50LCB1cmxTdHJpbmcsIGNhY2hlVXJsKTtcbiAgICAgIH1cblxuICAgIGlmIChuYXZpZ2F0ZUZhbGxiYWNrVVJMICYmIGlzTmF2aWdhdGVSZXF1ZXN0KGV2ZW50LnJlcXVlc3QpKSB7XG4gICAgICByZXNvdXJjZSA9IGhhbmRsZU5hdmlnYXRlRmFsbGJhY2socmVzb3VyY2UpO1xuICAgIH1cblxuICAgIGV2ZW50LnJlc3BvbmRXaXRoKHJlc291cmNlKTtcbiAgfSk7XG5cbiAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZGF0YSA9IGUuZGF0YTtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcblxuICAgIHN3aXRjaCAoZGF0YS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3NraXBXYWl0aW5nJzpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChzZWxmLnNraXBXYWl0aW5nKSBzZWxmLnNraXBXYWl0aW5nKCk7XG4gICAgICAgIH1icmVhaztcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNhY2hlRmlyc3RSZXNwb25zZShldmVudCwgdXJsU3RyaW5nLCBjYWNoZVVybCkge1xuICAgIGhhbmRsZU5hdmlnYXRpb25QcmVsb2FkKGV2ZW50KTtcblxuICAgIHJldHVybiBjYWNoZXNNYXRjaChjYWNoZVVybCwgQ0FDSEVfTkFNRSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW1NXXTonLCAnVVJMIFsnICsgY2FjaGVVcmwgKyAnXSgnICsgdXJsU3RyaW5nICsgJykgZnJvbSBjYWNoZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfVxuXG4gICAgICAvLyBMb2FkIGFuZCBjYWNoZSBrbm93biBhc3NldHNcbiAgICAgIHZhciBmZXRjaGluZyA9IGZldGNoKGV2ZW50LnJlcXVlc3QpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU1ddOicsICdVUkwgWycgKyB1cmxTdHJpbmcgKyAnXSB3cm9uZyByZXNwb25zZTogWycgKyByZXNwb25zZS5zdGF0dXMgKyAnXSAnICsgcmVzcG9uc2UudHlwZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tTV106JywgJ1VSTCBbJyArIHVybFN0cmluZyArICddIGZyb20gbmV0d29yaycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhY2hlVXJsID09PSB1cmxTdHJpbmcpIHtcbiAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlQ2xvbmUgPSByZXNwb25zZS5jbG9uZSgpO1xuICAgICAgICAgICAgdmFyIHN0b3JpbmcgPSBjYWNoZXMub3BlbihDQUNIRV9OQU1FKS50aGVuKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FjaGUucHV0KHVybFN0cmluZywgcmVzcG9uc2VDbG9uZSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTV106JywgJ0NhY2hlIGFzc2V0OiAnICsgdXJsU3RyaW5nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBldmVudC53YWl0VW50aWwoc3RvcmluZyk7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZmV0Y2hpbmc7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXR3b3JrRmlyc3RSZXNwb25zZShldmVudCwgdXJsU3RyaW5nLCBjYWNoZVVybCkge1xuICAgIHJldHVybiBmZXRjaFdpdGhQcmVsb2FkKGV2ZW50KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbU1ddOicsICdVUkwgWycgKyB1cmxTdHJpbmcgKyAnXSBmcm9tIG5ldHdvcmsnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhyb3cgdG8gcmVhY2ggdGhlIGNvZGUgaW4gdGhlIGNhdGNoIGJlbG93XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jlc3BvbnNlIGlzIG5vdCBvaycpO1xuICAgIH0pXG4gICAgLy8gVGhpcyBuZWVkcyB0byBiZSBpbiBhIGNhdGNoKCkgYW5kIG5vdCBqdXN0IGluIHRoZSB0aGVuKCkgYWJvdmVcbiAgICAvLyBjYXVzZSBpZiB5b3VyIG5ldHdvcmsgaXMgZG93biwgdGhlIGZldGNoKCkgd2lsbCB0aHJvd1xuICAgIFsnY2F0Y2gnXShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tTV106JywgJ1VSTCBbJyArIHVybFN0cmluZyArICddIGZyb20gY2FjaGUgaWYgcG9zc2libGUnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlc01hdGNoKGNhY2hlVXJsLCBDQUNIRV9OQU1FKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5hdmlnYXRpb25QcmVsb2FkKGV2ZW50KSB7XG4gICAgaWYgKG5hdmlnYXRpb25QcmVsb2FkICYmIHR5cGVvZiBuYXZpZ2F0aW9uUHJlbG9hZC5tYXAgPT09ICdmdW5jdGlvbicgJiZcbiAgICAvLyBVc2UgcmVxdWVzdC5tb2RlID09PSAnbmF2aWdhdGUnIGluc3RlYWQgb2YgaXNOYXZpZ2F0ZVJlcXVlc3RcbiAgICAvLyBiZWNhdXNlIGV2ZXJ5dGhpbmcgd2hhdCBzdXBwb3J0cyBuYXZpZ2F0aW9uUHJlbG9hZCBzdXBwb3J0c1xuICAgIC8vICduYXZpZ2F0ZScgcmVxdWVzdC5tb2RlXG4gICAgZXZlbnQucHJlbG9hZFJlc3BvbnNlICYmIGV2ZW50LnJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJykge1xuICAgICAgdmFyIG1hcHBlZCA9IG5hdmlnYXRpb25QcmVsb2FkLm1hcChuZXcgVVJMKGV2ZW50LnJlcXVlc3QudXJsKSwgZXZlbnQucmVxdWVzdCk7XG5cbiAgICAgIGlmIChtYXBwZWQpIHtcbiAgICAgICAgc3RvcmVQcmVsb2FkZWRSZXNwb25zZShtYXBwZWQsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUZW1wb3JhcnkgaW4tbWVtb3J5IHN0b3JlIGZvciBmYXN0ZXIgYWNjZXNzXG4gIHZhciBuYXZpZ2F0aW9uUHJlbG9hZFN0b3JlID0gbmV3IE1hcCgpO1xuXG4gIGZ1bmN0aW9uIHN0b3JlUHJlbG9hZGVkUmVzcG9uc2UoX3VybCwgZXZlbnQpIHtcbiAgICB2YXIgdXJsID0gbmV3IFVSTChfdXJsLCBsb2NhdGlvbik7XG4gICAgdmFyIHByZWxvYWRSZXNwb25zZVByb21pc2UgPSBldmVudC5wcmVsb2FkUmVzcG9uc2U7XG5cbiAgICBuYXZpZ2F0aW9uUHJlbG9hZFN0b3JlLnNldChwcmVsb2FkUmVzcG9uc2VQcm9taXNlLCB7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIHJlc3BvbnNlOiBwcmVsb2FkUmVzcG9uc2VQcm9taXNlXG4gICAgfSk7XG5cbiAgICB2YXIgaXNTYW1lUHJlbG9hZCA9IGZ1bmN0aW9uIGlzU2FtZVByZWxvYWQoKSB7XG4gICAgICByZXR1cm4gbmF2aWdhdGlvblByZWxvYWRTdG9yZS5oYXMocHJlbG9hZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgfTtcblxuICAgIHZhciBzdG9yaW5nID0gcHJlbG9hZFJlc3BvbnNlUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIC8vIFJldHVybiBpZiBwcmVsb2FkIGlzbid0IGVuYWJsZWQgb3IgaGFzbid0IGhhcHBlbmVkXG4gICAgICBpZiAoIXJlcykgcmV0dXJuO1xuXG4gICAgICAvLyBJZiBuYXZpZ2F0aW9uUHJlbG9hZFN0b3JlIGFscmVhZHkgY29uc3VtZWRcbiAgICAgIC8vIG9yIG5hdmlnYXRpb25QcmVsb2FkU3RvcmUgYWxyZWFkeSBjb250YWlucyBhbm90aGVyIHByZWxvYWQsXG4gICAgICAvLyB0aGVuIGRvIG5vdCBzdG9yZSBhbnl0aGluZyBhbmQgcmV0dXJuXG4gICAgICBpZiAoIWlzU2FtZVByZWxvYWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjbG9uZSA9IHJlcy5jbG9uZSgpO1xuXG4gICAgICAvLyBTdG9yaW5nIHRoZSBwcmVsb2FkIHJlc3BvbnNlIGZvciBsYXRlciBjb25zdW1lIChoYXNuJ3QgeWV0IGJlZW4gY29uc3VtZWQpXG4gICAgICByZXR1cm4gY2FjaGVzLm9wZW4oUFJFTE9BRF9DQUNIRV9OQU1FKS50aGVuKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICBpZiAoIWlzU2FtZVByZWxvYWQoKSkgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiBjYWNoZS5wdXQodXJsLCBjbG9uZSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFpc1NhbWVQcmVsb2FkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZXMub3BlbihQUkVMT0FEX0NBQ0hFX05BTUUpLnRoZW4oZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVsnZGVsZXRlJ10odXJsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGV2ZW50LndhaXRVbnRpbChzdG9yaW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldHJpdmVJbk1lbW9yeVByZWxvYWRlZFJlc3BvbnNlKHVybCkge1xuICAgIGlmICghbmF2aWdhdGlvblByZWxvYWRTdG9yZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBmb3VuZFJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgIHZhciBmb3VuZEtleSA9IHVuZGVmaW5lZDtcblxuICAgIG5hdmlnYXRpb25QcmVsb2FkU3RvcmUuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmUsIGtleSkge1xuICAgICAgaWYgKHN0b3JlLnVybC5ocmVmID09PSB1cmwuaHJlZikge1xuICAgICAgICBmb3VuZFJlc3BvbnNlID0gc3RvcmUucmVzcG9uc2U7XG4gICAgICAgIGZvdW5kS2V5ID0ga2V5O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZvdW5kUmVzcG9uc2UpIHtcbiAgICAgIG5hdmlnYXRpb25QcmVsb2FkU3RvcmVbJ2RlbGV0ZSddKGZvdW5kS2V5KTtcbiAgICAgIHJldHVybiBmb3VuZFJlc3BvbnNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJldHJpdmVQcmVsb2FkZWRSZXNwb25zZShldmVudCkge1xuICAgIHZhciB1cmwgPSBuZXcgVVJMKGV2ZW50LnJlcXVlc3QudXJsKTtcblxuICAgIGlmIChzZWxmLnJlZ2lzdHJhdGlvbi5uYXZpZ2F0aW9uUHJlbG9hZCAmJiBuYXZpZ2F0aW9uUHJlbG9hZCAmJiBuYXZpZ2F0aW9uUHJlbG9hZC50ZXN0ICYmIG5hdmlnYXRpb25QcmVsb2FkLnRlc3QodXJsLCBldmVudC5yZXF1ZXN0KSkge30gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGZyb21NZW1vcnkgPSByZXRyaXZlSW5NZW1vcnlQcmVsb2FkZWRSZXNwb25zZSh1cmwpO1xuICAgIHZhciByZXF1ZXN0ID0gZXZlbnQucmVxdWVzdDtcblxuICAgIGlmIChmcm9tTWVtb3J5KSB7XG4gICAgICBldmVudC53YWl0VW50aWwoY2FjaGVzLm9wZW4oUFJFTE9BRF9DQUNIRV9OQU1FKS50aGVuKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVbJ2RlbGV0ZSddKHJlcXVlc3QpO1xuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gZnJvbU1lbW9yeTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVzTWF0Y2gocmVxdWVzdCwgUFJFTE9BRF9DQUNIRV9OQU1FKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIGV2ZW50LndhaXRVbnRpbChjYWNoZXMub3BlbihQUkVMT0FEX0NBQ0hFX05BTUUpLnRoZW4oZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgcmV0dXJuIGNhY2hlWydkZWxldGUnXShyZXF1ZXN0KTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2UgfHwgZmV0Y2goZXZlbnQucmVxdWVzdCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOYXZpZ2F0ZUZhbGxiYWNrKGZldGNoaW5nKSB7XG4gICAgcmV0dXJuIGZldGNoaW5nWydjYXRjaCddKGZ1bmN0aW9uICgpIHt9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdmFyIGlzT2sgPSByZXNwb25zZSAmJiByZXNwb25zZS5vaztcbiAgICAgIHZhciBpc1JlZGlyZWN0ID0gcmVzcG9uc2UgJiYgcmVzcG9uc2UudHlwZSA9PT0gJ29wYXF1ZXJlZGlyZWN0JztcblxuICAgICAgaWYgKGlzT2sgfHwgaXNSZWRpcmVjdCAmJiAhbmF2aWdhdGVGYWxsYmFja0ZvclJlZGlyZWN0cykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChERUJVRykge1xuICAgICAgICBjb25zb2xlLmxvZygnW1NXXTonLCAnTG9hZGluZyBuYXZpZ2F0aW9uIGZhbGxiYWNrIFsnICsgbmF2aWdhdGVGYWxsYmFja1VSTCArICddIGZyb20gY2FjaGUnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlc01hdGNoKG5hdmlnYXRlRmFsbGJhY2tVUkwsIENBQ0hFX05BTUUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFwQXNzZXRzKCkge1xuICAgIE9iamVjdC5rZXlzKGFzc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBhc3NldHNba2V5XSA9IGFzc2V0c1trZXldLm1hcChmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTChwYXRoLCBsb2NhdGlvbik7XG5cbiAgICAgICAgdXJsLmhhc2ggPSAnJztcblxuICAgICAgICBpZiAoZXh0ZXJuYWxzLmluZGV4T2YocGF0aCkgPT09IC0xKSB7XG4gICAgICAgICAgdXJsLnNlYXJjaCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybC50b1N0cmluZygpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBPYmplY3Qua2V5cyhsb2FkZXJzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGxvYWRlcnNNYXBba2V5XSA9IGxvYWRlcnNNYXBba2V5XS5tYXAoZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwocGF0aCwgbG9jYXRpb24pO1xuXG4gICAgICAgIHVybC5oYXNoID0gJyc7XG5cbiAgICAgICAgaWYgKGV4dGVybmFscy5pbmRleE9mKHBhdGgpID09PSAtMSkge1xuICAgICAgICAgIHVybC5zZWFyY2ggPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmwudG9TdHJpbmcoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaGFzaGVzTWFwID0gT2JqZWN0LmtleXMoaGFzaGVzTWFwKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgaGFzaCkge1xuICAgICAgdmFyIHVybCA9IG5ldyBVUkwoaGFzaGVzTWFwW2hhc2hdLCBsb2NhdGlvbik7XG4gICAgICB1cmwuc2VhcmNoID0gJyc7XG4gICAgICB1cmwuaGFzaCA9ICcnO1xuXG4gICAgICByZXN1bHRbaGFzaF0gPSB1cmwudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuXG4gICAgZXh0ZXJuYWxzID0gZXh0ZXJuYWxzLm1hcChmdW5jdGlvbiAocGF0aCkge1xuICAgICAgdmFyIHVybCA9IG5ldyBVUkwocGF0aCwgbG9jYXRpb24pO1xuICAgICAgdXJsLmhhc2ggPSAnJztcblxuICAgICAgcmV0dXJuIHVybC50b1N0cmluZygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQWxsTm9ybWFsaXplZChjYWNoZSwgcmVxdWVzdHMsIG9wdGlvbnMpIHtcbiAgICB2YXIgYWxsb3dMb2FkZXJzID0gb3B0aW9ucy5hbGxvd0xvYWRlcnMgIT09IGZhbHNlO1xuICAgIHZhciBidXN0VmFsdWUgPSBvcHRpb25zICYmIG9wdGlvbnMuYnVzdDtcbiAgICB2YXIgcmVxdWVzdEluaXQgPSBvcHRpb25zLnJlcXVlc3QgfHwge1xuICAgICAgY3JlZGVudGlhbHM6ICdvbWl0JyxcbiAgICAgIG1vZGU6ICdjb3JzJ1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVxdWVzdHMubWFwKGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICBpZiAoYnVzdFZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3QgPSBhcHBseUNhY2hlQnVzdChyZXF1ZXN0LCBidXN0VmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmV0Y2gocmVxdWVzdCwgcmVxdWVzdEluaXQpLnRoZW4oZml4UmVkaXJlY3RlZFJlc3BvbnNlKTtcbiAgICB9KSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2VzKSB7XG4gICAgICBpZiAocmVzcG9uc2VzLnNvbWUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiAhcmVzcG9uc2Uub2s7XG4gICAgICB9KSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdXcm9uZyByZXNwb25zZSBzdGF0dXMnKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBleHRyYWN0ZWQgPSBbXTtcbiAgICAgIHZhciBhZGRBbGwgPSByZXNwb25zZXMubWFwKGZ1bmN0aW9uIChyZXNwb25zZSwgaSkge1xuICAgICAgICBpZiAoYWxsb3dMb2FkZXJzKSB7XG4gICAgICAgICAgZXh0cmFjdGVkLnB1c2goZXh0cmFjdEFzc2V0c1dpdGhMb2FkZXJzKHJlcXVlc3RzW2ldLCByZXNwb25zZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhY2hlLnB1dChyZXF1ZXN0c1tpXSwgcmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChleHRyYWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG5ld09wdGlvbnMgPSBjb3B5T2JqZWN0KG9wdGlvbnMpO1xuICAgICAgICAgIG5ld09wdGlvbnMuYWxsb3dMb2FkZXJzID0gZmFsc2U7XG5cbiAgICAgICAgICB2YXIgd2FpdEFsbCA9IGFkZEFsbDtcblxuICAgICAgICAgIGFkZEFsbCA9IFByb21pc2UuYWxsKGV4dHJhY3RlZCkudGhlbihmdW5jdGlvbiAoYWxsKSB7XG4gICAgICAgICAgICB2YXIgZXh0cmFjdGVkUmVxdWVzdHMgPSBbXS5jb25jYXQuYXBwbHkoW10sIGFsbCk7XG5cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgd2FpdEFsbCA9IHdhaXRBbGwuY29uY2F0KGFkZEFsbE5vcm1hbGl6ZWQoY2FjaGUsIGV4dHJhY3RlZFJlcXVlc3RzLCBuZXdPcHRpb25zKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh3YWl0QWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZEFsbCA9IFByb21pc2UuYWxsKGFkZEFsbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhZGRBbGw7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBleHRyYWN0QXNzZXRzV2l0aExvYWRlcnMocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICB2YXIgYWxsID0gT2JqZWN0LmtleXMobG9hZGVyc01hcCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBsb2FkZXIgPSBsb2FkZXJzTWFwW2tleV07XG5cbiAgICAgIGlmIChsb2FkZXIuaW5kZXhPZihyZXF1ZXN0KSAhPT0gLTEgJiYgbG9hZGVyc1trZXldKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXJzW2tleV0ocmVzcG9uc2UuY2xvbmUoKSk7XG4gICAgICB9XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gISFhO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGFsbCkudGhlbihmdW5jdGlvbiAoYWxsKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCBhbGwpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hDYWNoZU1hcChyZXF1ZXN0KSB7XG4gICAgdmFyIHVybFN0cmluZyA9IHJlcXVlc3QudXJsO1xuICAgIHZhciB1cmwgPSBuZXcgVVJMKHVybFN0cmluZyk7XG5cbiAgICB2YXIgcmVxdWVzdFR5cGUgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoaXNOYXZpZ2F0ZVJlcXVlc3QocmVxdWVzdCkpIHtcbiAgICAgIHJlcXVlc3RUeXBlID0gJ25hdmlnYXRlJztcbiAgICB9IGVsc2UgaWYgKHVybC5vcmlnaW4gPT09IGxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgcmVxdWVzdFR5cGUgPSAnc2FtZS1vcmlnaW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0VHlwZSA9ICdjcm9zcy1vcmlnaW4nO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FjaGVNYXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbWFwID0gY2FjaGVNYXBzW2ldO1xuXG4gICAgICBpZiAoIW1hcCkgY29udGludWU7XG4gICAgICBpZiAobWFwLnJlcXVlc3RUeXBlcyAmJiBtYXAucmVxdWVzdFR5cGVzLmluZGV4T2YocmVxdWVzdFR5cGUpID09PSAtMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld1N0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHR5cGVvZiBtYXAubWF0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbmV3U3RyaW5nID0gbWFwLm1hdGNoKHVybCwgcmVxdWVzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdTdHJpbmcgPSB1cmxTdHJpbmcucmVwbGFjZShtYXAubWF0Y2gsIG1hcC50byk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdTdHJpbmcgJiYgbmV3U3RyaW5nICE9PSB1cmxTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ld1N0cmluZztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFdpdGhQcmVsb2FkKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC5wcmVsb2FkUmVzcG9uc2UgfHwgbmF2aWdhdGlvblByZWxvYWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmZXRjaChldmVudC5yZXF1ZXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXZlbnQucHJlbG9hZFJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UgfHwgZmV0Y2goZXZlbnQucmVxdWVzdCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FjaGVzTWF0Y2gocmVxdWVzdCwgY2FjaGVOYW1lKSB7XG4gIHJldHVybiBjYWNoZXMubWF0Y2gocmVxdWVzdCwge1xuICAgIGNhY2hlTmFtZTogY2FjaGVOYW1lXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgaWYgKGlzTm90UmVkaXJlY3RlZFJlc3BvbnNlKCkpIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICAvLyBGaXggYWxyZWFkeSBjYWNoZWQgcmVkaXJlY3RlZCByZXNwb25zZXNcbiAgICByZXR1cm4gZml4UmVkaXJlY3RlZFJlc3BvbnNlKHJlc3BvbnNlKS50aGVuKGZ1bmN0aW9uIChmaXhlZFJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gY2FjaGVzLm9wZW4oY2FjaGVOYW1lKS50aGVuKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICByZXR1cm4gY2FjaGUucHV0KHJlcXVlc3QsIGZpeGVkUmVzcG9uc2UpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmaXhlZFJlc3BvbnNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pXG4gIC8vIFJldHVybiB2b2lkIGlmIGVycm9yIGhhcHBlbmVkIChjYWNoZSBub3QgZm91bmQpXG4gIFsnY2F0Y2gnXShmdW5jdGlvbiAoKSB7fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5Q2FjaGVCdXN0KGFzc2V0LCBrZXkpIHtcbiAgdmFyIGhhc1F1ZXJ5ID0gYXNzZXQuaW5kZXhPZignPycpICE9PSAtMTtcbiAgcmV0dXJuIGFzc2V0ICsgKGhhc1F1ZXJ5ID8gJyYnIDogJz8nKSArICdfX3VuY2FjaGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xufVxuXG5mdW5jdGlvbiBpc05hdmlnYXRlUmVxdWVzdChyZXF1ZXN0KSB7XG4gIHJldHVybiByZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZScgfHwgcmVxdWVzdC5oZWFkZXJzLmdldCgnVXBncmFkZS1JbnNlY3VyZS1SZXF1ZXN0cycpIHx8IChyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdBY2NlcHQnKSB8fCAnJykuaW5kZXhPZigndGV4dC9odG1sJykgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBpc05vdFJlZGlyZWN0ZWRSZXNwb25zZShyZXNwb25zZSkge1xuICByZXR1cm4gIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5yZWRpcmVjdGVkIHx8ICFyZXNwb25zZS5vayB8fCByZXNwb25zZS50eXBlID09PSAnb3BhcXVlcmVkaXJlY3QnO1xufVxuXG4vLyBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3N3LXByZWNhY2hlL3B1bGwvMjQxL2ZpbGVzI2RpZmYtM2VlOTA2MGRjN2EzMTJjNmE4MjJjYWM2M2E4YzYzMGJSODVcbmZ1bmN0aW9uIGZpeFJlZGlyZWN0ZWRSZXNwb25zZShyZXNwb25zZSkge1xuICBpZiAoaXNOb3RSZWRpcmVjdGVkUmVzcG9uc2UocmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gIH1cblxuICB2YXIgYm9keSA9ICdib2R5JyBpbiByZXNwb25zZSA/IFByb21pc2UucmVzb2x2ZShyZXNwb25zZS5ib2R5KSA6IHJlc3BvbnNlLmJsb2IoKTtcblxuICByZXR1cm4gYm9keS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShkYXRhLCB7XG4gICAgICBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXNcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvcHlPYmplY3Qob3JpZ2luYWwpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9yaWdpbmFsKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgcmVzdWx0W2tleV0gPSBvcmlnaW5hbFtrZXldO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gbG9nR3JvdXAodGl0bGUsIGFzc2V0cykge1xuICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbU1ddOicsIHRpdGxlKTtcblxuICBhc3NldHMuZm9yRWFjaChmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICBjb25zb2xlLmxvZygnQXNzZXQ6JywgYXNzZXQpO1xuICB9KTtcblxuICBjb25zb2xlLmdyb3VwRW5kKCk7XG59XG4gICAgICAgIFdlYnBhY2tTZXJ2aWNlV29ya2VyKF9fd3BvLCB7XG5sb2FkZXJzOiB7fSxcbmNhY2hlTWFwczogW1xuICAgICAge1xuICAgICAgbWF0Y2g6IC8uKi8sXG4gICAgICB0bzogXCIvXCIsXG4gICAgICByZXF1ZXN0VHlwZXM6IFtcIm5hdmlnYXRlXCJdLFxuICAgIH1cbiAgICBdLFxubmF2aWdhdGlvblByZWxvYWQ6IGZhbHNlLFxufSk7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZW1wdHktZW50cnkuanNcIilcbiAgICAgICJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);