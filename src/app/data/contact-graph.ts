import {ContactDot} from "./contact-dot";
import {Contact} from "./contact";

export interface ContactGraph {
  contactDots: [ContactDot],
  contactLines: [Contact]
}
