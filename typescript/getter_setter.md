# getter/setter

```
interfase IEmployee {
  readonly fulloName: string;
}

const fullNameMaxLength = 10;

class Employee implements IEmployee{
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }
        
        this._fullName = newName;
    }
}
```

## interfase

interfaceにはgetter/setterに準ずるaccessorは存在しない。

そこでgetのみreadonlyを使い定義する。