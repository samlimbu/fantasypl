import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2, Input, SimpleChanges, SimpleChange, ContentChild, TemplateRef } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { NotificationWindowService } from './notification-window-service/notification-window.service';
import { componentDestroyed } from '../takeUntil-function/takeUntil-function';
@Component({
  selector: 'notification-window',
  templateUrl: './notification-window.component.html',
  styleUrls: ['./notification-window.component.css']
})
export class NotificationWindowComponent implements OnInit {

    @Output() button = new EventEmitter<string>();
    @Output() cancel = new EventEmitter<string>();
    @ViewChild('modalBox') modalBox: ElementRef;
    @ViewChild('cancelButton') cancelButton: ElementRef;
    @ViewChild('deleteButton') deleteButton: ElementRef;
    @ViewChild('openModal') openModal: ElementRef;
    @Input() heading;
    @Input() body;
    @Input() buttonName;
    @Input() isCRUDing;
    @Input() spinnerColor;

    @Input() isHide : boolean ; 
    @ContentChild('bodyContent') bodyTmpl: TemplateRef<any>;


    @Input('showByClick')
    set onShow(val: number) {
        // console.log(val);
        // if (val == 0) {
        //     this.cancelButton.nativeElement.click();
        // }
        // else {
            
        //     this.openModal.nativeElement.click();
        //     setTimeout(()=>{
        //         console.log('canceled');
        //         this.cancelButton.nativeElement.click();
        //     },100);
        // }

    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['isHide']){
            console.log(changes['isHide']);
            if (this.isHide) {
                this.cancelButton.nativeElement.click();
            } 
            
        }
    }
    ngOnDestroy(){

    }
    onDelete(event) {
        this.button.emit(event);
    }
    onCancel(event) {
       
        this.cancel.emit(event);
    }

    constructor(private notificationWindowService: NotificationWindowService) { }

    ngOnInit() {
        this.notificationWindowService.getMessage()
        .takeUntil(componentDestroyed(this))
            .subscribe(
                obj=>[
                    this.body=obj.message, 
                    this.openModal.nativeElement.click(),
                    setTimeout(()=>{
                        console.log('canceled');
                        this.cancelButton.nativeElement.click();
                    },2000)
                ]
            );
    
    }
    ngAfterInit(){
        
    }

}
