const F=[1,57,41,21,203,34,97,73,227,91,149,62,105,45,39,137,241,107,3,173,39,71,65,238,219,101,187,87,81,151,141,133,249,117,221,209,197,187,177,169,5,153,73,139,133,127,243,233,223,107,103,99,191,23,177,171,165,159,77,149,9,139,135,131,253,245,119,231,224,109,211,103,25,195,189,23,45,175,171,83,81,79,155,151,147,9,141,137,67,131,129,251,123,30,235,115,113,221,217,53,13,51,50,49,193,189,185,91,179,175,43,169,83,163,5,79,155,19,75,147,145,143,35,69,17,67,33,65,255,251,247,243,239,59,29,229,113,111,219,27,213,105,207,51,201,199,49,193,191,47,93,183,181,179,11,87,43,85,167,165,163,161,159,157,155,77,19,75,37,73,145,143,141,35,138,137,135,67,33,131,129,255,63,250,247,61,121,239,237,117,29,229,227,225,111,55,109,216,213,211,209,207,205,203,201,199,197,195,193,48,190,47,93,185,183,181,179,178,176,175,173,171,85,21,167,165,41,163,161,5,79,157,78,154,153,19,75,149,74,147,73,144,143,71,141,140,139,137,17,135,134,133,66,131,65,129,1],H=[0,9,10,10,14,12,14,14,16,15,16,15,16,15,15,17,18,17,12,18,16,17,17,19,19,18,19,18,18,19,19,19,20,19,20,20,20,20,20,20,15,20,19,20,20,20,21,21,21,20,20,20,21,18,21,21,21,21,20,21,17,21,21,21,22,22,21,22,22,21,22,21,19,22,22,19,20,22,22,21,21,21,22,22,22,18,22,22,21,22,22,23,22,20,23,22,22,23,23,21,19,21,21,21,23,23,23,22,23,23,21,23,22,23,18,22,23,20,22,23,23,23,21,22,20,22,21,22,24,24,24,24,24,22,21,24,23,23,24,21,24,23,24,22,24,24,22,24,24,22,23,24,24,24,20,23,22,23,24,24,24,24,24,24,24,23,21,23,22,23,24,24,24,22,24,24,24,23,22,24,24,25,23,25,25,23,24,25,25,24,22,25,25,25,24,23,24,25,25,25,25,25,25,25,25,25,25,25,25,23,25,23,24,25,25,25,25,25,25,25,25,25,24,22,25,25,23,25,25,20,24,25,24,25,25,22,24,25,24,25,24,25,25,24,25,25,25,25,22,25,25,25,24,25,24,25,18];function J(s,z,A,N,n,t,g){if(Number.isNaN(t)||t<1)return;t|=0,Number.isNaN(g)&&(g=1),g|=0,g>3&&(g=3),g<1&&(g=1);const E=s.getImageData(z,A,N,n),e=E.data;let p,u,c,l,m,a,f,o,v,x,b,y,C=N-1,j=n-1,D=t+1,B=[],I=[],_=[],k=F[t],q=H[t],G=[],R=[];for(;g-- >0;){for(y=b=0,m=0;m<n;m++){for(p=e[y]*D,u=e[y+1]*D,c=e[y+2]*D,a=1;a<=t;a++)f=y+((a>C?C:a)<<2),p+=e[f++],u+=e[f++],c+=e[f++];for(l=0;l<N;l++)B[b]=p,I[b]=u,_[b]=c,m==0&&(G[l]=((f=l+D)<C?f:C)<<2,R[l]=(f=l-t)>0?f<<2:0),o=y+G[l],v=y+R[l],p+=e[o++]-e[v++],u+=e[o++]-e[v++],c+=e[o++]-e[v++],b++;y+=N<<2}for(l=0;l<N;l++){for(x=l,p=B[x]*D,u=I[x]*D,c=_[x]*D,a=1;a<=t;a++)x+=a>j?0:N,p+=B[x],u+=I[x],c+=_[x];for(b=l<<2,m=0;m<n;m++)e[b]=p*k>>>q,e[b+1]=u*k>>>q,e[b+2]=c*k>>>q,l==0&&(G[m]=((f=m+D)<j?f:j)*N,R[m]=(f=m-t)>0?f*N:0),o=l+G[m],v=l+R[m],p+=B[o]-B[v],u+=I[o]-I[v],c+=_[o]-_[v],b+=N<<2}}s.putImageData(E,z,A)}export{J as default};
//# sourceMappingURL=fastBlur-Co-79rP4.js.map
