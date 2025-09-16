import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        this.element.querySelectorAll(".toast").forEach(el => {
            Toast.getOrCreateInstance(el, { autohide: true, delay: 5000 }).show()
        })
    }
}
