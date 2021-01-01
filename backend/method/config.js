const preference = [
    ["Lebih dari 200.000", "Antara 100.000 dan 200.000", "Antara 50.000 dan 100.000", "Antara 25.000 dan 50.000", "Kurang dari 25.000"],
    ["Kurang dari atau selama 2 tahun", "3 tahun", "4 tahun", "5 tahun", "Lebih dari 5 tahun"]
];

const bobot = [5,5];

const isBenefit = [
    false,
    true
];

module.exports = {
    preference,
    bobot,
    isBenefit
};