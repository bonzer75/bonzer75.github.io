import { HttpClient } from '@angular/common/http';
import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import swal from'sweetalert2';

let projectsDict = [
  {
    id: 1, 
    name:'Proyecto 1', 
    bg: '#447F00',
    html: 'Tres tristes tigres, tragaban trigo en un trigal, en tres tristes trastos, tragaban trigo tres tristes tigres. <iframe width="410" height="315" src="https://www.youtube.com/embed/MzzxOQ9Zulc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 2, 
    name:'Proyecto 2', 
    bg: '#007F75',
    html: 'Tres tristes tigres, tragaban trigo en un trigal, en tres tristes trastos, tragaban trigo tres tristes tigres. <iframe width="410" height="315" src="https://www.youtube.com/embed/MzzxOQ9Zulc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: 3, 
    name:'Proyecto 3', 
    bg: '#7A7F00',
    html: 'Tres tristes tigres, tragaban trigo en un trigal, en tres tristes trastos, tragaban trigo tres tristes tigres. <iframe width="410" height="315" src="https://www.youtube.com/embed/MzzxOQ9Zulc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  }
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient) {
  } 
  ngOnInit(): void {
  }

  title = "sweetAlert"
  projects = projectsDict;
  sweetAlert(i:number) {
    if (i == 0) {
      swal.fire({
          title: projectsDict[i].name,
          html: projectsDict[i].html,
          showConfirmButton: true,
        })
    }
    if (i == 1) {
      swal.fire({
          title: projectsDict[i].name,
          html: projectsDict[i].html,
          showConfirmButton: true,
        })
    }
    if(i == 2) {
      swal.fire({
          title: projectsDict[i].name,
          html: projectsDict[i].html,
          showConfirmButton: true,
        })
    }
  }

}
