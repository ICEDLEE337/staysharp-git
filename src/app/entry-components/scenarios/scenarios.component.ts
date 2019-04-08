import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html'
})
export class ScenariosComponent implements OnInit {
  ugg = `git grep -in '@.*Mapping.*{.*}'`;
  uggamugga = [
    'src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java:102:    @GetMapping("/owners/{ownerId}/edit")',
    'src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java:109:    @PostMapping("/owners/{ownerId}/edit")',
    'src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java:126:    @GetMapping("/owners/{ownerId}")',
    'src/main/java/org/springframework/samples/petclinic/owner/PetController.java:34: @RequestMapping("/owners/{ownerId}")',
    'src/main/java/org/springframework/samples/petclinic/owner/PetController.java:89:    @GetMapping("/pets/{petId}/edit")',
    'src/main/java/org/springframework/samples/petclinic/owner/PetController.java:96:    @PostMapping("/pets/{petId}/edit")',
    'src/main/java/org/springframework/samples/petclinic/owner/VisitController.java:72:    @GetMapping("/owners/*/pets/{petId}/visits/new")',
    'src/main/java/org/springframework/samples/petclinic/owner/VisitController.java:78:    @PostMapping("/owners/{ownerId}/pets/{petId}/visits/new")',
    'src/main/java/org/springframework/samples/petclinic/vet/VetController.java:49:    @GetMapping({ "/vets" })'
  ].join('\n');

  constructor () {
  }

  ngOnInit () {
  }

}
