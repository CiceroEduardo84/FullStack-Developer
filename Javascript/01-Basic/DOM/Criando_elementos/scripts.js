const guest = document.querySelector("ul");

const newGuest = document.createElement("li");
newGuest.classList.add("guest");

const guestName = document.createElement("span");

guestName.textContent = "Diego";

const guestSurname = document.createElement("span");
guestSurname.textContent = "Fernandes";

// Adiciona após o último filho.
// newGuest.append(guestName, guestSurname);

// Adiciona antes do primeiro filho.
// newGuest.prepend(guestSurname);

// É mais simples que o append e aceita um argumento.
newGuest.appendChild(guestName);

guest.append(newGuest);
