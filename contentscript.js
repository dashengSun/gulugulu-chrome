// Copyright (c) 2017 Kaichao. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var s = document.createElement('script');
s.src = chrome.extension.getURL('main.min.js');
document.body.appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};
