import React from 'react';
import { Modal } from 'antd';

class ModalHelper {
    static info() {
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {},
        });
      }
      
      static success(content) {
        Modal.success({
          content,
        });
      }
      
      static error() {
        Modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        });
      }
      
      static warning() {
        Modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        });
      }
}

export default ModalHelper;