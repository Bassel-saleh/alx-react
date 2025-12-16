import path from 'path';


export  default{
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve('.', 'public'),
    filename: 'bundle.js'
  },
};
