import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-simple',
  template: 
    `
      <div class="simple-bg"></div>
      <div class="simple-layout">
        <div class="simple-header">
          <div>
            <img src="/assets/images/erdemir-logo-152.png" alt="">
          </div>
        </div>
        <div class="simple-content">
          <router-outlet></router-outlet>
        </div>
        <p class="simple-footer">
          © Copyright 2021 erdemir.com.tr
        </p>
      </div>
    `,
  styles: [
    `
      :host {
        width: 100%;
        display: flex;
      }
      .simple-bg {
        width: 60%;
        background-image: url('/assets/images/brennan-ehrhardt-unsplash.jpg');
        background-size: cover;
      }
      .simple-layout {
        width: 40%;
        display: flex;
        background-color: #FFF;
      }
      .simple-header {
        position: absolute;
        top: 0;
        width: 40%;
      }
      .simple-content {
        margin: auto 0;
        width: 100%;
      }
      .simple-footer {
        position: absolute;
        bottom: 0;
        font-size: smaller;
        text-align: center;
        width: 40%;
      }
      .redirect-buttons {
        padding: 24px;
      }
      .redirect-buttons > a:not(:last-child) {
        margin-right: 16px;
      }

      .simple-header > div {
        display: flex;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
      .simple-header > div > img {
        margin: auto;
        height: 152px;
      }
    `
  ]
})
export class LayoutSimpleComponent {}
