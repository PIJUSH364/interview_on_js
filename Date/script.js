console.log("relative time");

const dateFormatterAuto = new Intl.RelativeTimeFormat("en-US", {
    localeMatcher: "best fit",
    numeric: "auto"
});

console.log(dateFormatterAuto.format(-1, "day"));//yesterday

const dateFormatterNumeric = new Intl.RelativeTimeFormat("en-US", {
    localeMatcher: "best fit",
    numeric: "always"
});

console.log(dateFormatterNumeric.format(-1, "day"));//1 day ago