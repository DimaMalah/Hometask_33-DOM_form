
(function () {

	const formHandler = {

		formId: null,
		formElement: null,

		getElementsFromDOM() {
			this.formElement = document.getElementById(this.formId);

		},

		setFormEvents() {
			this.formElement.addEventListener("submit", (event) => this.submitHandler(event));

		},

		submitHandler(e) {

			e.preventDefault();

			const inputsData = {};
			const inputs = e.target.querySelectorAll("input");

			for (let input of inputs) {

				if (input.value.trim().length === 0) {
					input.classList.add("bg_red");
					return
				} else {
					input.classList.remove("bg_red");
					inputsData[input.name] = input.value;
				}
			}

			for (let i = 0; i < Object.keys(inputsData).length; i++) {
				this.insertElementIntoDOM(
					this.createElement(
						"div",
						["bg_greenyellow"],
						Object.keys(inputsData)[i] + " - " + Object.values(inputsData)[i]),
					document.getElementById("form_data")
				)
			}

			e.target.reset()
		},

		createElement(nodeName, className, content) {
			let el = document.createElement(nodeName);
			if (Array.isArray(className)) {

				className.forEach(singleClassName => {
					el.classList.add(singleClassName);
				})

			} else {
				el.classList.add(className);
			}

			if (content) {
				el.innerHTML = content;
			}

			return el
		},

		insertElementIntoDOM(element, destination) {
			destination.append(element);
		},

		init(id) {
			this.formId = id
			this.getElementsFromDOM();
			this.setFormEvents()
		}

	}

	formHandler.init("form")

})()