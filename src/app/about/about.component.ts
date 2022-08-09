import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import swal from'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public lista: string[];
  public num: number[];
  title = "sweetAlert"

  constructor(private http: HttpClient) {
    this.lista = ["Proyecto 1", "Proyecto 2", "Proyecto 3"];
    this.num = [0, 1, 2];
  }

  ngOnInit(): void {
  }

  sweetAlert(i:number) {
    if (i == 0) {
      swal.fire({
          title: 'Proyecto 1',
          html: 'Tres tristes tigres, tragaban trigo en un trigal, en tres tristes trastos, tragaban trigo tres tristes tigres. <iframe width="410" height="315" src="https://www.youtube.com/embed/MzzxOQ9Zulc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          showConfirmButton: true,
        })
    }
    if (i == 1) {
      swal.fire({
          title: 'Proyecto 2',
          html: 'Tres tristes tigres, tragaban trigo en un trigal, en tres tristes trastos, tragaban trigo tres tristes tigres. <iframe width="410" height="315" src="https://www.youtube.com/embed/MzzxOQ9Zulc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          showConfirmButton: true,
        })
    }
    if(i == 2) {
      swal.fire({
          title: 'Proyecto 3',
          html: 'Tres tristes tigres, tragaban trigo en un trigal, en tres tristes trastos, tragaban trigo tres tristes tigres. <iframe width="410" height="315" src="https://www.youtube.com/embed/MzzxOQ9Zulc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          showConfirmButton: true,
        })
    }

  }

}
