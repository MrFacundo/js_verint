// ADD TO THE BOTTOM OF THE HEAD TAG

Identify function (global)

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

$(function () {
    console.log("this");

    function generateUUID() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }
        );
    }

    let customProfileId = getCookie("customProfileId");

    if (customProfileId) {
        console.log("customProfileId found in cookies:", customProfileId);
    } else {
        customProfileId = generateUUID();
        setCookie("customProfileId", customProfileId, 365);
        console.log(
            "customProfileId not found. New one generated and stored:",
            customProfileId
        );
    }

    ire("identify", {
        customerId: "",
        customerEmail: "",
        customProfileId: customProfileId,
    });
});

// Conversion function (end page)

function generateOrderId() {
    return 'ORD-' + Math.random().toString(36).slice(2, 11).toUpperCase();
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

let customProfileId = getCookie("customProfileId");

$(function () {
    var orderId = generateOrderId();

    ire(
        "trackConversion",
        49465,
        {
            orderId: orderId,
            customProfileId: customProfileId,
            customerId: "",
            customerEmail: "",
        },
        { verifySiteDefinitionMatch: true }
    );
    console.log("orderId:", orderId);
    console.log("customProfileId:", customProfileId);
    console.log("ire", ire);
    console.log("ire.trackConversion", ire.trackConversion);
    }
);
